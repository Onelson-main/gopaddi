"use client"
import { searchActivity } from "@/lib/api/activity_service"
import { useStore } from "@/lib/store"
import { ActivityDetail } from "@/lib/types/activity_types"
import { Formik } from "formik"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

const cities = [
    { name: "Lagos", latitude: 6.5244, longitude: 3.3792 },
    { name: "Abuja", latitude: 9.0765, longitude: 7.3986 },
    { name: "Port Harcourt", latitude: 4.8156, longitude: 7.0498 },
    { name: "Kano", latitude: 12.0022, longitude: 8.5920 },
    { name: "London", latitude: 51.5074, longitude: -0.1278 },
    { name: "New York", latitude: 40.7128, longitude: -74.0060 },
    { name: "New Delhi", latitude: 28.6139, longitude: 77.2090 },
    { name: "Dubai", latitude: 25.2048, longitude: 55.2708 },
    { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { name: "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
    { name: "Frankfurt", latitude: 50.1109, longitude: 8.6821 },
]

interface CityDropdownProps {
    isOpen: boolean
    searchTerm: string
    onSearchChange: (value: string) => void
    onSelect: (city: { name: string; latitude: number; longitude: number }) => void
    onClose: () => void
}

function CityDropdown({ isOpen, searchTerm, onSearchChange, onSelect, onClose }: CityDropdownProps) {
    if (!isOpen) return null

    const filteredCities = cities.filter(
        (city) => city.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="absolute top-full left-0 right-0 bg-BACKGROUND-2 border border-gray-300 rounded-b shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-2 border-b">
                <input
                    type="text"
                    placeholder="Search cities..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    autoFocus
                />
            </div>
            <div className="max-h-48 overflow-y-auto">
                {filteredCities.map((city) => (
                    <div
                        key={city.name}
                        className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                        onClick={() => {
                            onSelect(city)
                            onClose()
                        }}
                    >
                        <span className="font-medium">{city.name}</span>
                    </div>
                ))}
                {filteredCities.length === 0 && (
                    <div className="p-3 text-gray-500 text-center">No cities found</div>
                )}
            </div>
        </div>
    )
}

export default function AddActivityModal() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [activities, setActivities] = useState<ActivityDetail[]>([])

    const { addActivity } = useStore()

    const today = new Date().toISOString().split('T')[0]

    return (
        <div className="fixed z-[100] left-0 top-0 bg-[#000000E6] h-full w-full flex justify-center items-center p-10">
            <div className="relative w-fit max-w-[1200px] bg-BACKGROUND-2 rounded max-h-90p flex flex-col">
                <Link href={"/"} className="absolute right-1 top-1">
                    <svg
                        className="h-6 w-6 text-NEUTRAL"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                    </svg>
                </Link>

                <Formik
                    initialValues={{
                        selectedCity: null as { name: string; latitude: number; longitude: number } | null,
                        startDate: ""
                    }}
                    onSubmit={async (values) => {
                        console.log('Location:', values.selectedCity);
                        console.log('Start Date:', values.startDate);

                        try {
                            if (!values.selectedCity) {
                                toast.info("Please fill the required details")
                                return;
                            }

                            const res = await searchActivity(values.selectedCity.name, values.startDate)
                            if (!res.status) {
                                toast.error("No Activity found")
                            }
                            console.log(res.data);
                            setActivities(res.data)
                        } catch (err) {
                            console.log(err);
                            toast.error("an error occurred")
                        }
                    }}
                >
                    {({ values, handleSubmit, setFieldValue }) => (
                        <div className="bg-ACCENT-MINUS p-4 w-full rounded flex flex-col">
                            <strong><h1 className="text-2xl mb-2">Search Activity</h1></strong>

                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                <div className="relative w-52.5 flex flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-gray-100 cursor-pointer">
                                    <span className="text-xs text-gray-600">LOCATION</span>
                                    <div
                                        className="text-xl font-bold whitespace-nowrap"
                                        onClick={() => {
                                            setIsDropdownOpen(!isDropdownOpen)
                                            setSearchTerm("")
                                        }}
                                    >
                                        {values.selectedCity ? values.selectedCity.name : "Select City"}
                                    </div>
                                    <CityDropdown
                                        isOpen={isDropdownOpen}
                                        searchTerm={searchTerm}
                                        onSearchChange={setSearchTerm}
                                        onSelect={(val) => { setFieldValue("selectedCity", val); setSearchTerm('') }}
                                        onClose={() => setIsDropdownOpen(false)}
                                    />
                                </div>

                                {/* Start Date */}
                                <div className="flex w-52.5 flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-gray-100 cursor-pointer">
                                    <span className="text-xs text-gray-600">START DATE</span>
                                    <input
                                        type="date"
                                        className="text-xl font-bold bg-transparent"
                                        value={values.startDate}
                                        onChange={(e) => setFieldValue("startDate", e.target.value)}
                                        min={today}
                                    />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="bg-gray-50 p-2 w-fit self-end rounded-b">
                                <button
                                    className="left-auto bg-blue-600 hover:bg-blue-700 text-BACKGROUND-2 font-bold p-4 rounded"
                                    onClick={() => handleSubmit()}
                                    type="button"
                                >
                                    SEARCH ACTIVITY
                                </button>
                            </div>
                        </div>
                    )}
                </Formik>
                {activities.length > 0 && <div className="max-h-[60vh] overflow-y-scroll bg-BACKGROUND flex flex-col gap-8 rounded-t p-8">
                    {activities.map((activity, index) => (
                        <div key={index} className='flex items-stretch w-full bg-BACKGROUND-2 rounded'>
                            <div className="flex-1 rounded-xl overflow-hidden flex flex-col p-4 pr-0 space-y-4">
                                <div className="flex flex-col md:flex-row">
                                    {/* Attraction Image */}
                                    <div className="relative min-w-[150px] max-w-[200px] rounded-lg overflow-hidden">
                                        <Image
                                            height={200}
                                            width={200}
                                            src={activity.img}
                                            alt="Attraction"
                                            className="object-cover rounded aspect-square bg-ACCENT"
                                            quality={100}
                                        />
                                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 26C15.5712 26 18.0846 25.2376 20.2224 23.8091C22.3602 22.3806 24.0265 20.3503 25.0104 17.9749C25.9944 15.5994 26.2518 12.9856 25.7502 10.4638C25.2486 7.94207 24.0105 5.62569 22.1924 3.80761C20.3743 1.98953 18.0579 0.7514 15.5362 0.249792C13.0144 -0.251816 10.4005 0.00562668 8.02511 0.989567C5.64967 1.97351 3.61935 3.63975 2.19089 5.77759C0.76243 7.91543 -5.72205e-06 10.4288 -5.72205e-06 13C0.0036335 16.4467 1.37444 19.7512 3.81163 22.1884C6.24881 24.6256 9.5533 25.9964 13 26ZM9.29249 12.2925L14.2925 7.2925C14.3854 7.19959 14.4957 7.12589 14.6171 7.07561C14.7385 7.02532 14.8686 6.99944 15 6.99944C15.1314 6.99944 15.2615 7.02532 15.3829 7.07561C15.5043 7.12589 15.6146 7.19959 15.7075 7.2925C15.8004 7.38541 15.8741 7.49571 15.9244 7.6171C15.9747 7.7385 16.0006 7.8686 16.0006 8C16.0006 8.1314 15.9747 8.2615 15.9244 8.3829C15.8741 8.50429 15.8004 8.61459 15.7075 8.7075L11.4137 13L15.7075 17.2925C15.8951 17.4801 16.0006 17.7346 16.0006 18C16.0006 18.2654 15.8951 18.5199 15.7075 18.7075C15.5199 18.8951 15.2654 19.0006 15 19.0006C14.7346 19.0006 14.4801 18.8951 14.2925 18.7075L9.29249 13.7075C9.19952 13.6146 9.12576 13.5043 9.07543 13.3829C9.02511 13.2615 8.99921 13.1314 8.99921 13C8.99921 12.8686 9.02511 12.7385 9.07543 12.6171C9.12576 12.4957 9.19952 12.3854 9.29249 12.2925Z" fill="#F9FAFB" />
                                            </svg>
                                        </button>

                                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM16.7075 13.7075L11.7075 18.7075C11.6146 18.8004 11.5043 18.8741 11.3829 18.9244C11.2615 18.9747 11.1314 19.0006 11 19.0006C10.8686 19.0006 10.7385 18.9747 10.6171 18.9244C10.4957 18.8741 10.3854 18.8004 10.2925 18.7075C10.1996 18.6146 10.1259 18.5043 10.0756 18.3829C10.0253 18.2615 9.99945 18.1314 9.99945 18C9.99945 17.8686 10.0253 17.7385 10.0756 17.6171C10.1259 17.4957 10.1996 17.3854 10.2925 17.2925L14.5863 13L10.2925 8.7075C10.1049 8.51986 9.99945 8.26536 9.99945 8C9.99945 7.73464 10.1049 7.48014 10.2925 7.2925C10.4801 7.10486 10.7346 6.99944 11 6.99944C11.2654 6.99944 11.5199 7.10486 11.7075 7.2925L16.7075 12.2925C16.8005 12.3854 16.8742 12.4957 16.9246 12.6171C16.9749 12.7385 17.0008 12.8686 17.0008 13C17.0008 13.1314 16.9749 13.2615 16.9246 13.3829C16.8742 13.5043 16.8005 13.6146 16.7075 13.7075Z" fill="#F9FAFB" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Attraction Info */}
                                    <div className="flex-1">
                                        <div className="flex justify-between p-4">
                                            <div>
                                                <h3 className="text-lg font-semibold">{activity.name}</h3>
                                                <p className="font-medium">
                                                    {activity.description}
                                                </p>
                                                <div className="flex font-medium items-center space-x-4 mt-1 text-sm text-gray-600">
                                                    <span className="text-ACCENT flex items-center gap-2 cursor-pointer hover:underline">
                                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 4.21875C6.38811 4.21875 5.78997 4.4002 5.2812 4.74014C4.77244 5.08009 4.37591 5.56326 4.14175 6.12857C3.90759 6.69388 3.84632 7.31593 3.9657 7.91606C4.08507 8.51619 4.37972 9.06744 4.81239 9.50011C5.24506 9.93278 5.79631 10.2274 6.39644 10.3468C6.99657 10.4662 7.61862 10.4049 8.18393 10.1708C8.74924 9.93659 9.23241 9.54006 9.57236 9.03129C9.9123 8.52253 10.0938 7.92439 10.0938 7.3125C10.0928 6.49227 9.76657 5.7059 9.18658 5.12592C8.6066 4.54593 7.82023 4.21968 7 4.21875ZM7 8.71875C6.72187 8.71875 6.44999 8.63627 6.21873 8.48175C5.98747 8.32723 5.80723 8.10761 5.70079 7.85065C5.59436 7.59369 5.56651 7.31094 5.62077 7.03815C5.67503 6.76537 5.80896 6.5148 6.00563 6.31813C6.2023 6.12146 6.45287 5.98753 6.72565 5.93327C6.99844 5.87901 7.28119 5.90686 7.53815 6.01329C7.79511 6.11973 8.01473 6.29997 8.16925 6.53123C8.32377 6.76249 8.40625 7.03437 8.40625 7.3125C8.40625 7.68546 8.25809 8.04315 7.99437 8.30687C7.73065 8.57059 7.37296 8.71875 7 8.71875ZM7 0.84375C5.28495 0.845611 3.64068 1.52774 2.42796 2.74046C1.21524 3.95318 0.533111 5.59745 0.53125 7.3125C0.53125 12.7519 6.27156 16.8328 6.51625 17.0037C6.65805 17.1029 6.82693 17.1561 7 17.1561C7.17307 17.1561 7.34195 17.1029 7.48375 17.0037C8.57097 16.2024 9.56568 15.2827 10.4495 14.2615C12.4246 11.9932 13.4688 9.58852 13.4688 7.3125C13.4669 5.59745 12.7848 3.95318 11.572 2.74046C10.3593 1.52774 8.71505 0.845611 7 0.84375ZM9.20078 13.128C8.53038 13.8981 7.79398 14.6082 7 15.2501C6.20602 14.6082 5.46962 13.8981 4.79922 13.128C3.625 11.7682 2.21875 9.65461 2.21875 7.3125C2.21875 6.04443 2.72249 4.8283 3.61915 3.93165C4.5158 3.03499 5.73193 2.53125 7 2.53125C8.26807 2.53125 9.4842 3.03499 10.3809 3.93165C11.2775 4.8283 11.7812 6.04443 11.7812 7.3125C11.7812 9.65461 10.375 11.7682 9.20078 13.128Z" fill="#0D6EFD" />
                                                        </svg>
                                                        Directions
                                                    </span>
                                                    <span className="flex items-center gap-2.5">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.4884 7.0422L12.3173 9.8097L13.2672 13.93C13.3175 14.1454 13.3031 14.3708 13.226 14.5781C13.1488 14.7854 13.0123 14.9654 12.8334 15.0955C12.6545 15.2256 12.4413 15.3001 12.2203 15.3096C11.9993 15.3192 11.7804 15.2634 11.591 15.1492L7.9973 12.9695L4.41136 15.1492C4.22192 15.2634 4.00303 15.3192 3.78205 15.3096C3.56107 15.3001 3.34781 15.2256 3.16894 15.0955C2.99006 14.9654 2.85351 14.7854 2.77635 14.5781C2.69919 14.3708 2.68485 14.1454 2.73511 13.93L3.68363 9.81392L0.511832 7.0422C0.344073 6.89752 0.222765 6.70652 0.163121 6.49317C0.103478 6.27981 0.108154 6.0536 0.176562 5.84289C0.244971 5.63218 0.374067 5.44636 0.547662 5.30873C0.721257 5.1711 0.931623 5.08779 1.15238 5.06923L5.33316 4.70712L6.96511 0.814625C7.05034 0.610379 7.19409 0.435913 7.37826 0.313197C7.56243 0.190481 7.7788 0.125 8.00011 0.125C8.22143 0.125 8.43779 0.190481 8.62197 0.313197C8.80614 0.435913 8.94989 0.610379 9.03511 0.814625L10.672 4.70712L14.8514 5.06923C15.0721 5.08779 15.2825 5.1711 15.4561 5.30873C15.6297 5.44636 15.7588 5.63218 15.8272 5.84289C15.8956 6.0536 15.9003 6.27981 15.8406 6.49317C15.781 6.70652 15.6597 6.89752 15.4919 7.0422H15.4884Z" fill="#F4B93E" />
                                                        </svg>
                                                        {activity.rating}
                                                    </span>
                                                    <span className='flex items-center gap-2.5'>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM9 1.2C13.3235 1.2 16.8 4.67647 16.8 9C16.8 13.3235 13.3235 16.8 9 16.8C4.67647 16.8 1.2 13.3235 1.2 9C1.2 4.67647 4.67647 1.2 9 1.2ZM8.4 4.8V9.42353L11.7176 11.0824C11.9412 11.1941 12.2118 11.1 12.3235 10.8765C12.4353 10.6529 12.3412 10.3824 12.1176 10.2706L9.12 8.77647V4.8C9.12 4.53176 8.89412 4.32 8.64 4.32C8.38588 4.32 8.16 4.53176 8.16 4.8H8.4Z" fill="#475367" />
                                                        </svg>
                                                        Duration: 1 Hour
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="!text-[1.75rem] font-semibold whitespace-nowrap">{activity.price}</p>
                                                <p className="font-medium whitespace-nowrap">Per person</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="flex flex-wrap gap-4 text-lg text-TEXT-1 border-y py-2 px-4">
                                            <p className="text-sm font-medium text-gray-600 line-clamp-2">
                                                What&apos;s Included: Admission ticket, Popcorn
                                                <a href="#" className="text-ACCENT ml-3 hover:underline">See more</a>
                                            </p>

                                            <div className='flex ml-auto'>
                                                <span className="flex items-center gap-2">
                                                    <button className="bg-[#0A369D] text-BACKGROUND-2 text-xs font-medium p-1 rounded"> Day 1</button>
                                                    <div className="flex flex-col gap-1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.5625C7.33122 0.5625 5.69992 1.05735 4.31238 1.98448C2.92484 2.9116 1.84338 4.22936 1.20477 5.77111C0.566156 7.31286 0.399065 9.00936 0.724628 10.6461C1.05019 12.2828 1.85379 13.7862 3.03379 14.9662C4.2138 16.1462 5.71721 16.9498 7.35393 17.2754C8.99064 17.6009 10.6871 17.4338 12.2289 16.7952C13.7706 16.1566 15.0884 15.0752 16.0155 13.6876C16.9427 12.3001 17.4375 10.6688 17.4375 9C17.435 6.763 16.5453 4.61833 14.9635 3.03653C13.3817 1.45473 11.237 0.564981 9 0.5625ZM9 15.5625C7.70206 15.5625 6.43327 15.1776 5.35407 14.4565C4.27488 13.7354 3.43374 12.7105 2.93704 11.5114C2.44034 10.3122 2.31038 8.99272 2.5636 7.71972C2.81682 6.44672 3.44183 5.27739 4.35962 4.35961C5.2774 3.44183 6.44672 2.81681 7.71972 2.5636C8.99272 2.31038 10.3122 2.44034 11.5114 2.93704C12.7105 3.43374 13.7354 4.27487 14.4565 5.35407C15.1776 6.43327 15.5625 7.70206 15.5625 9C15.5606 10.7399 14.8686 12.408 13.6383 13.6383C12.408 14.8686 10.7399 15.5606 9 15.5625ZM12.7883 9.58672C12.9644 9.76284 13.0633 10.0017 13.0633 10.2508C13.0633 10.4999 12.9644 10.7387 12.7883 10.9148C12.6122 11.091 12.3733 11.1899 12.1242 11.1899C11.8752 11.1899 11.6363 11.091 11.4602 10.9148L9 8.45312L6.53828 10.9133C6.36216 11.0894 6.12329 11.1883 5.87422 11.1883C5.62515 11.1883 5.38628 11.0894 5.21016 10.9133C5.03404 10.7372 4.9351 10.4983 4.9351 10.2492C4.9351 10.0001 5.03404 9.76128 5.21016 9.58516L8.33516 6.46016C8.42226 6.37276 8.52575 6.30341 8.6397 6.25609C8.75366 6.20877 8.87583 6.18442 8.99922 6.18442C9.12261 6.18442 9.24479 6.20877 9.35874 6.25609C9.47269 6.30341 9.57619 6.37276 9.66329 6.46016L12.7883 9.58672Z" fill="#98A2B3" />
                                                        </svg>
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.5625C7.33122 0.5625 5.69992 1.05735 4.31238 1.98448C2.92484 2.9116 1.84338 4.22936 1.20477 5.77111C0.566156 7.31286 0.399065 9.00936 0.724628 10.6461C1.05019 12.2828 1.85379 13.7862 3.03379 14.9662C4.2138 16.1462 5.71721 16.9498 7.35393 17.2754C8.99064 17.6009 10.6871 17.4338 12.2289 16.7952C13.7706 16.1566 15.0884 15.0752 16.0155 13.6876C16.9427 12.3001 17.4375 10.6688 17.4375 9C17.435 6.763 16.5453 4.61833 14.9635 3.03653C13.3817 1.45473 11.237 0.564981 9 0.5625ZM9 15.5625C7.70206 15.5625 6.43327 15.1776 5.35407 14.4565C4.27488 13.7354 3.43374 12.7105 2.93704 11.5114C2.44034 10.3122 2.31038 8.99272 2.5636 7.71972C2.81682 6.44672 3.44183 5.27739 4.35962 4.35961C5.2774 3.44183 6.44672 2.81681 7.71972 2.5636C8.99272 2.31038 10.3122 2.44034 11.5114 2.93704C12.7105 3.43374 13.7354 4.27487 14.4565 5.35407C15.1776 6.43327 15.5625 7.70206 15.5625 9C15.5606 10.7399 14.8686 12.408 13.6383 13.6383C12.408 14.8686 10.7399 15.5606 9 15.5625ZM12.7883 7.08672C12.8757 7.17382 12.945 7.27731 12.9923 7.39126C13.0397 7.50522 13.064 7.62739 13.064 7.75078C13.064 7.87417 13.0397 7.99634 12.9923 8.1103C12.945 8.22425 12.8757 8.32775 12.7883 8.41484L9.66329 11.5398C9.57619 11.6272 9.47269 11.6966 9.35874 11.7439C9.24479 11.7912 9.12261 11.8156 8.99922 11.8156C8.87583 11.8156 8.75366 11.7912 8.6397 11.7439C8.52575 11.6966 8.42226 11.6272 8.33516 11.5398L5.21016 8.41484C5.03404 8.23872 4.9351 7.99985 4.9351 7.75078C4.9351 7.50171 5.03404 7.26284 5.21016 7.08672C5.38628 6.9106 5.62515 6.81166 5.87422 6.81166C6.12329 6.81165 6.36216 6.9106 6.53828 7.08672L9 9.54688L11.4617 7.08438C11.5489 6.99736 11.6525 6.9284 11.7664 6.88142C11.8803 6.83444 12.0023 6.81037 12.1255 6.81059C12.2487 6.81081 12.3706 6.83531 12.4844 6.88269C12.5981 6.93007 12.7014 6.9994 12.7883 7.08672Z" fill="#98A2B3" />
                                                        </svg>

                                                    </div>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex justify-between pt-3 text-base font-medium text-ACCENT px-4">
                                            <div className="flex gap-8">
                                                <a href="#" className="hover:underline">Activity details</a>
                                                <a href="#" className="hover:underline">Price details</a>
                                            </div>
                                            <a href="#" className="hover:underline">Edit details now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => { addActivity(activity); toast.success("A new Activity has been added to your itinerary🎉🎉") }} className='!w-12 bg-green-400 flex justify-center items-center'>
                                <svg width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" /></svg>
                            </button>
                        </div>
                    ))}
                </div>}
            </div>
        </div >
    )
}