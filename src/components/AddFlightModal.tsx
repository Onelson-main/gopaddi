"use client"
import { searchFlights } from "@/lib/api/flight_service"
import { FlightDetails } from "@/lib/types/flights_types"
import { Formik } from "formik"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"
import Image from "next/image";
import { useStore } from "@/lib/store"

const airports = [
    { city: "Lagos", iata: "LOS" },
    { city: "Abuja", iata: "ABV" },
    { city: "Port Harcourt", iata: "PHC" },
    { city: "Kano", iata: "KAN" },
    { city: "London", iata: "LHR" },
    { city: "New York", iata: "JFK" },
    { city: "New Delhi", iata: "DEL" },
    { city: "Dubai", iata: "DXB" },
    { city: "Paris", iata: "CDG" },
    { city: "Amsterdam", iata: "AMS" },
    { city: "Frankfurt", iata: "FRA" },
]

interface DropdownProps {
    isOpen: boolean
    searchTerm: string
    onSearchChange: (value: string) => void
    onSelect: (iata: string) => void
    onClose: () => void
}

function AirportDropdown({ isOpen, searchTerm, onSearchChange, onSelect, onClose }: DropdownProps) {
    if (!isOpen) return null

    const filteredAirports = airports.filter(
        (airport) =>
            airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            airport.iata.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-2 border-b">
                <input
                    type="text"
                    placeholder="Search airports..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    autoFocus
                />
            </div>
            <div className="max-h-48 overflow-y-auto">
                {filteredAirports.map((airport) => (
                    <div
                        key={airport.iata}
                        className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                        onClick={() => {
                            onSelect(airport.iata)
                            onClose()
                        }}
                    >
                        <span className="font-medium">
                            {airport.city}, {airport.iata}
                        </span>
                    </div>
                ))}
                {filteredAirports.length === 0 && <div className="p-3 text-gray-500 text-center">No airports found</div>}
            </div>
        </div>
    )
}

export default function AddFlightModal() {
    const [fromDropdownOpen, setFromDropdownOpen] = useState(false)
    const [toDropdownOpen, setToDropdownOpen] = useState(false)
    const [fromSearchTerm, setFromSearchTerm] = useState("")
    const [toSearchTerm, setToSearchTerm] = useState("")

    const formatDate = (date: Date | string) => {
        date = new Date(date)
        return date.toISOString().split("T")[0]
    }

    const getAirportCity = (iata: string) => {
        const airport = airports.find((a) => a.iata === iata)
        return airport ? airport.city : ""
    }

    const [flights, setFlights] = useState<FlightDetails[]>([]);
    const { addFlight } = useStore();

    const today = new Date().toISOString().split('T')[0]

    return (
        <div className="fixed z-[100] left-0 top-0 bg-[#000000E6] h-full w-full flex justify-center items-center p-10">

            <div className="relative w-fit max-w-[1200px] bg-BACKGROUND-2 rounded max-h-90p flex flex-col">
                <Link href={"/"}>
                    <svg
                        className=" h-6 w-6 text-NEUTRAL absolute right-1 top-1"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                    </svg>
                </Link>
                <Formik
                    initialValues={{
                        from: "",
                        to: "",
                        type: "oneway" as "oneway" | "round",
                        departure: new Date() as unknown as string,
                        return: new Date() as unknown as string,
                    }}
                    onSubmit={async (values) => {
                        values.departure = new Date(values.departure).toISOString()
                        values.return = new Date(values.return).toISOString()

                        // return
                        try {
                            if (!values.from || !values.to) {
                                toast.info("Please fill the required details of your trip")
                                return;
                            }
                            const res = await searchFlights(values)
                            if (!res.status) {
                                toast.error("No Flights found")
                            }
                            // console.log(res.data);
                            setFlights(res.data)
                        } catch (err) {
                            console.log(err);
                            toast.error("an error occurred")
                        }
                    }}
                >
                    {({ values, handleSubmit, setFieldValue }) => (
                        <div className="bg-BACKGROUND-2 p-4 w-full rounded flex flex-col">
                            <strong><h1 className="text-2xl mb-2">Add Flight</h1></strong>
                            <div className="w-fit flex items-center gap-4 font-bold bg-BACKGROUND text-FOREGROUND p-2 rounded-t">
                                <span
                                    className={`p-4 rounded hover:bg-neutral-200 cursor-pointer ${values.type === "oneway" ? "bg-ACCENT text-BACKGROUND-2" : "bg-BACKGROUND-2"
                                        }`}
                                    onClick={() => setFieldValue("type", "oneway")}
                                >
                                    ONE WAY
                                </span>
                                <span
                                    className={`p-4 rounded hover:bg-neutral-200 cursor-pointer ${values.type === "round" ? "bg-ACCENT text-BACKGROUND-2" : "bg-BACKGROUND-2"
                                        }`}
                                    onClick={() => setFieldValue("type", "round")}
                                >
                                    ROUND TRIP
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-BACKGROUND rounded-b">
                                <div className="relative w-52.5 flex flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-neutral-200 cursor-pointer">
                                    <span className="text-xs text-TEXT-1">FROM</span>
                                    <div
                                        className="text-xl font-bold whitespace-nowrap"
                                        onClick={() => {
                                            setFromDropdownOpen(!fromDropdownOpen)
                                            setToDropdownOpen(false)
                                            setFromSearchTerm("")
                                        }}
                                    >
                                        {values.from ? `${getAirportCity(values.from)} ${values.from}` : "Select Airport"}
                                    </div>
                                    <AirportDropdown
                                        isOpen={fromDropdownOpen}
                                        searchTerm={fromSearchTerm}
                                        onSearchChange={setFromSearchTerm}
                                        onSelect={(iata) => {
                                            setFieldValue("from", iata)
                                            setFromSearchTerm("")
                                        }}
                                        onClose={() => setFromDropdownOpen(false)}
                                    />
                                </div>

                                <div className="relative w-52.5 flex flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-neutral-200 cursor-pointer">
                                    <span className="text-xs text-TEXT-1">TO</span>
                                    <div
                                        className="text-xl font-bold whitespace-nowrap"
                                        onClick={() => {
                                            setToDropdownOpen(!toDropdownOpen)
                                            setFromDropdownOpen(false)
                                            setToSearchTerm("")
                                        }}
                                    >
                                        {values.to ? `${getAirportCity(values.to)} ${values.to}` : "Select Airport"}
                                    </div>
                                    <AirportDropdown
                                        isOpen={toDropdownOpen}
                                        searchTerm={toSearchTerm}
                                        onSearchChange={setToSearchTerm}
                                        onSelect={(iata) => {
                                            setFieldValue("to", iata)
                                            setToSearchTerm("")
                                        }}
                                        onClose={() => setToDropdownOpen(false)}
                                    />
                                </div>

                                <div className="flex w-52.5 flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-neutral-200 cursor-pointer">
                                    <span className="text-xs text-TEXT-1">DEPARTURE DATE</span>
                                    <input
                                        type="date"
                                        className="text-xl font-bold bg-transparent"
                                        value={formatDate(values.departure)}
                                        onChange={(e) => setFieldValue("departure", new Date(e.target.value))}
                                        min={today}
                                    />
                                </div>

                                {values.type === "round" && (
                                    <div className="flex w-52.5 flex-col p-4 rounded bg-BACKGROUND-2 hover:bg-neutral-200 cursor-pointer">
                                        <span className="text-xs text-TEXT-1">RETURN DATE</span>
                                        <input
                                            type="date"
                                            className="text-xl font-bold bg-transparent"
                                            value={formatDate(values.return)}
                                            onChange={(e) => setFieldValue("return", new Date(e.target.value))}
                                            min={values.departure || today}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="bg-BACKGROUND p-2 w-fit self-end rounded-b">
                                <button
                                    className="left-auto bg-ACCENT hover:bg-NEUTRAL text-BACKGROUND-2 font-bold p-4 rounded"
                                    onClick={() => handleSubmit()}
                                    type="button"
                                >
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    )}
                </Formik>

                {flights.length > 0 && <div className="max-h-[60vh] overflow-y-scroll bg-BACKGROUND gap-8 rounded-t p-8">
                    {flights.map((flight) => (<div key={flight.flightIndex} className='flex m-8 items-stretch bg-BACKGROUND-2 rounded'>
                        <div className="flex-1 flex flex-col space-y-4">
                            {/* Info */}
                            <div className="flex justify-between items-start p-4 pr-12">
                                <div className="flex items-center space-x-4">
                                    <Image src="/img/airline_logo.png" height={10} width={10} alt="Airline Logo" className="h-6 w-auto" quality={100} />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">{flight.airline}</h3>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <p>{flight.flightNumber}</p>
                                            <span className="bg-[#0A369D] text-white text-xs px-2 py-0.5 rounded">{flight.cabinClass}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Timing */}
                                <div className="flex-1 max-w-1/2 flex justify-between items-center text-sm text-gray-600 px-4">
                                    <div className="text-center">
                                        <p className="font-bold text-black text-lg">{flight.departure.time}</p>
                                        <div className='text-sm whitespace-nowrap'>{flight.departure.date}</div>
                                    </div>

                                    <div className='flex flex-col items-stretch mx-10 w-full'>
                                        <div className='flex justify-between'>
                                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.0624 13.8748C14.0624 14.1235 13.9636 14.3619 13.7878 14.5377C13.612 14.7135 13.3735 14.8123 13.1249 14.8123H1.87487C1.62623 14.8123 1.38777 14.7135 1.21196 14.5377C1.03614 14.3619 0.937369 14.1235 0.937369 13.8748C0.937369 13.6262 1.03614 13.3877 1.21196 13.2119C1.38777 13.0361 1.62623 12.9373 1.87487 12.9373H13.1249C13.3735 12.9373 13.612 13.0361 13.7878 13.2119C13.9636 13.3877 14.0624 13.6262 14.0624 13.8748ZM19.671 4.02169C19.6466 4.15238 19.5947 4.27639 19.5187 4.38549C19.4428 4.4946 19.3445 4.58629 19.2303 4.6545L7.71471 11.5311L7.70456 11.5365C7.06625 11.9113 6.32351 12.0687 5.58806 11.985C4.85261 11.9013 4.16422 11.5811 3.62643 11.0725L3.61159 11.0584L0.799087 8.3045C0.613843 8.12799 0.474782 7.90869 0.394121 7.66586C0.31346 7.42303 0.293668 7.16411 0.336484 6.91184C0.379299 6.65958 0.483413 6.42169 0.639676 6.21907C0.79594 6.01646 0.999572 5.85532 1.23268 5.74981L1.46237 5.63731C1.68449 5.52857 1.94059 5.512 2.17487 5.59122L4.24518 6.28966L5.35065 5.62091L3.93893 4.24825C3.74796 4.07136 3.60421 3.84956 3.52074 3.60299C3.43727 3.35643 3.41672 3.09292 3.46096 2.8364C3.50521 2.57988 3.61283 2.33848 3.77407 2.13412C3.93531 1.92976 4.14505 1.76892 4.38424 1.66622L4.42174 1.65059L4.98034 1.43966C5.19194 1.36059 5.42498 1.36059 5.63659 1.43966L9.71002 2.93731L13.6108 0.609188C14.3169 0.188071 15.1511 0.0352647 15.9606 0.178725C16.7702 0.322185 17.501 0.75232 18.0194 1.39044C18.0243 1.39582 18.0287 1.40157 18.0327 1.40762L19.4889 3.27325C19.5708 3.37785 19.6294 3.49873 19.6608 3.6278C19.6922 3.75688 19.6957 3.89117 19.671 4.02169ZM17.3577 3.58887L16.5624 2.56934C16.3266 2.28202 15.9957 2.08872 15.6296 2.02451C15.2635 1.96029 14.8865 2.02942 14.5671 2.21934L10.2881 4.77403C10.1683 4.84627 10.0339 4.89077 9.89466 4.90429C9.75542 4.91781 9.61492 4.9 9.48346 4.85216L5.88971 3.52872L7.53034 5.12247C7.63307 5.22234 7.71155 5.34443 7.75974 5.47936C7.80794 5.61428 7.82456 5.75847 7.80834 5.90082C7.79212 6.04318 7.74349 6.17992 7.66618 6.30055C7.58887 6.42118 7.48494 6.52249 7.36237 6.59669L4.84362 8.11622C4.72738 8.18623 4.59732 8.23017 4.46243 8.24501C4.32755 8.25985 4.19105 8.24523 4.06237 8.20216L3.0194 7.85059L4.91862 9.70997C5.16281 9.93817 5.47407 10.0816 5.8062 10.1189C6.13834 10.1561 6.47365 10.0854 6.76237 9.917L17.3577 3.58887Z" fill="#475367" />
                                            </svg>
                                            <span className='text-TEXT-3 text-xs whitespace-nowrap mx-2 font-semibold'>
                                                Duration: {flight.duration}
                                            </span>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.6875 14.8745C19.6875 15.1231 19.5887 15.3616 19.4129 15.5374C19.2371 15.7132 18.9986 15.812 18.75 15.812H7.5C7.25136 15.812 7.0129 15.7132 6.83709 15.5374C6.66127 15.3616 6.5625 15.1231 6.5625 14.8745C6.5625 14.6259 6.66127 14.3874 6.83709 14.2116C7.0129 14.0358 7.25136 13.937 7.5 13.937H18.75C18.9986 13.937 19.2371 14.0358 19.4129 14.2116C19.5887 14.3874 19.6875 14.6259 19.6875 14.8745ZM17.2469 12.9643L3.44844 9.10028C2.72691 8.89658 2.09145 8.46324 1.63834 7.86592C1.18524 7.26859 0.9392 6.53985 0.937501 5.79012V1.7495C0.937194 1.50178 0.995787 1.25755 1.10845 1.03694C1.22111 0.816324 1.3846 0.625659 1.58545 0.480669C1.7863 0.33568 2.01874 0.240522 2.26361 0.203045C2.50847 0.165568 2.75873 0.186845 2.99375 0.265123L3.42188 0.408092C3.55613 0.452826 3.67852 0.527373 3.77986 0.626143C3.8812 0.724913 3.95886 0.845343 4.00703 0.978404L4.78125 3.12372L6.5625 3.63153V1.7495C6.56219 1.50178 6.62079 1.25755 6.73345 1.03694C6.84611 0.816324 7.0096 0.625659 7.21045 0.480669C7.4113 0.33568 7.64374 0.240522 7.88861 0.203045C8.13347 0.165568 8.38373 0.186845 8.61875 0.265123L9.04688 0.408092C9.1736 0.450333 9.28982 0.519166 9.38778 0.609979C9.48573 0.700792 9.56315 0.811489 9.61485 0.934654L11.3141 4.98544L15.9234 6.27372C16.6461 6.47688 17.2827 6.91041 17.7365 7.50844C18.1903 8.10647 18.4364 8.8363 18.4375 9.587V12.062C18.4374 12.2067 18.4039 12.3494 18.3395 12.479C18.2751 12.6085 18.1816 12.7214 18.0663 12.8088C17.9509 12.8962 17.817 12.9557 17.6748 12.9827C17.5327 13.0097 17.3862 13.0034 17.2469 12.9643ZM16.5625 9.587C16.5618 9.24562 16.4497 8.91381 16.2431 8.64205C16.0365 8.37029 15.7467 8.17347 15.418 8.08153L10.3727 6.67137C10.2365 6.6334 10.1106 6.56512 10.0046 6.47163C9.89848 6.37814 9.81493 6.26187 9.76016 6.13153L8.4375 2.97684V4.8745C8.43738 5.01949 8.40363 5.16248 8.3389 5.29223C8.27417 5.42197 8.18023 5.53493 8.06446 5.62223C7.94869 5.70953 7.81425 5.76879 7.67171 5.79534C7.52917 5.8219 7.38241 5.81503 7.24297 5.77528L3.80547 4.79637C3.66256 4.75571 3.53137 4.68165 3.4227 4.58032C3.31403 4.47899 3.23101 4.35328 3.18047 4.21356L2.8125 3.19325V5.79012C2.81306 6.13116 2.9248 6.46272 3.13077 6.73453C3.33675 7.00635 3.62573 7.20359 3.95391 7.29637L16.5625 10.8261V9.587Z" fill="#475367" />
                                            </svg>
                                        </div>
                                        <div className='w-full h-2 bg-[#E7F0FF] rounded flex justify-center'>
                                            <div className='w-1/2 h-2 bg-ACCENT rounded'></div>
                                        </div>

                                        <div className='flex justify-between'>
                                            {flight.route.start}
                                            <span className='text-TEXT-3 font-semibold'>
                                                {flight.route.stops.length > 0 ? (flight.route.stops.length + ' stop(s)') : "Direct"}
                                            </span>
                                            {flight.route.end}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="font-bold text-black text-lg">{flight.arrival.time}</p>
                                        <span className='text-sm whitespace-nowrap'>{flight.arrival.date}</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-right">
                                    <p className="text-xl font-bold text-gray-900">{flight.price}</p>
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="text-xs text-gray-600 flex flex-wrap items-center gap-2 p-4 border-y border-[#E4E7EC]">
                                Facilities:
                                <span className="flex items-center gap-1">
                                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.0625 7.5V13.75C6.0625 13.9986 5.96373 14.2371 5.78791 14.4129C5.6121 14.5887 5.37364 14.6875 5.125 14.6875C4.87636 14.6875 4.6379 14.5887 4.46209 14.4129C4.28627 14.2371 4.1875 13.9986 4.1875 13.75V7.5C4.1875 7.25136 4.28627 7.0129 4.46209 6.83709C4.6379 6.66127 4.87636 6.5625 5.125 6.5625C5.37364 6.5625 5.6121 6.66127 5.78791 6.83709C5.96373 7.0129 6.0625 7.25136 6.0625 7.5ZM7.9375 7.5V13.75C7.9375 13.9986 8.03627 14.2371 8.21209 14.4129C8.3879 14.5887 8.62636 14.6875 8.875 14.6875C9.12364 14.6875 9.3621 14.5887 9.53791 14.4129C9.71373 14.2371 9.8125 13.9986 9.8125 13.75V7.5C9.8125 7.25136 9.71373 7.0129 9.53791 6.83709C9.3621 6.66127 9.12364 6.5625 8.875 6.5625C8.62636 6.5625 8.3879 6.66127 8.21209 6.83709C8.03627 7.0129 7.9375 7.25136 7.9375 7.5ZM13.5625 5V16.25C13.5625 16.6644 13.3979 17.0618 13.1049 17.3549C12.8118 17.6479 12.4144 17.8125 12 17.8125H11.0625V18.75C11.0625 18.9986 10.9637 19.2371 10.7879 19.4129C10.6121 19.5887 10.3736 19.6875 10.125 19.6875C9.87636 19.6875 9.6379 19.5887 9.46209 19.4129C9.28627 19.2371 9.1875 18.9986 9.1875 18.75V17.8125H4.8125V18.75C4.8125 18.9986 4.71373 19.2371 4.53791 19.4129C4.3621 19.5887 4.12364 19.6875 3.875 19.6875C3.62636 19.6875 3.3879 19.5887 3.21209 19.4129C3.03627 19.2371 2.9375 18.9986 2.9375 18.75V17.8125H2C1.5856 17.8125 1.18817 17.6479 0.895146 17.3549C0.60212 17.0618 0.4375 16.6644 0.4375 16.25V5C0.4375 4.5856 0.60212 4.18817 0.895146 3.89515C1.18817 3.60212 1.5856 3.4375 2 3.4375H3.5625V2.1875C3.5625 1.60734 3.79297 1.05094 4.2032 0.640704C4.61344 0.230468 5.16984 0 5.75 0L8.25 0C8.83016 0 9.38656 0.230468 9.7968 0.640704C10.207 1.05094 10.4375 1.60734 10.4375 2.1875V3.4375H12C12.4144 3.4375 12.8118 3.60212 13.1049 3.89515C13.3979 4.18817 13.5625 4.5856 13.5625 5ZM5.4375 3.4375H8.5625V2.1875C8.5625 2.10462 8.52958 2.02513 8.47097 1.96653C8.41237 1.90792 8.33288 1.875 8.25 1.875H5.75C5.66712 1.875 5.58763 1.90792 5.52903 1.96653C5.47042 2.02513 5.4375 2.10462 5.4375 2.1875V3.4375ZM11.6875 5.3125H2.3125V15.9375H11.6875V5.3125Z" fill="#475367" />
                                    </svg>
                                    Baggage: {flight.facilities.baggage}, Cabin Baggage: {flight.facilities.cabinBaggage}
                                </span>

                                {flight.facilities.inFlightEntertainment && <span className='flex items-center gap-2'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8752 6.81217H9.3846L15.4893 5.20045C15.6089 5.1689 15.7211 5.114 15.8194 5.0389C15.9177 4.96379 16.0002 4.86998 16.062 4.76286C16.1239 4.65574 16.164 4.53744 16.1799 4.41477C16.1958 4.2921 16.1874 4.16748 16.1549 4.04811L15.5174 1.70436C15.4079 1.30954 15.1472 0.973776 14.7919 0.769787C14.4365 0.565798 14.0152 0.510012 13.619 0.614513L1.7182 3.75514C1.51993 3.8068 1.33394 3.89745 1.17109 4.02179C1.00825 4.14614 0.871813 4.30169 0.76976 4.47936C0.667513 4.65466 0.601362 4.84865 0.575199 5.0499C0.549036 5.25116 0.56339 5.45561 0.617416 5.65123L1.18773 7.74967V14.6247C1.18773 15.0391 1.35235 15.4365 1.64537 15.7295C1.9384 16.0225 2.33583 16.1872 2.75023 16.1872H15.2502C15.6646 16.1872 16.0621 16.0225 16.3551 15.7295C16.6481 15.4365 16.8127 15.0391 16.8127 14.6247V7.74967C16.8127 7.50103 16.714 7.26257 16.5381 7.08676C16.3623 6.91094 16.1239 6.81217 15.8752 6.81217ZM8.75726 3.83639L10.1862 4.66139L8.15882 5.19654L6.72992 4.37154L8.75726 3.83639ZM13.7924 2.50826L14.0979 3.62936L12.7596 3.98248L11.3307 3.1567L13.7924 2.50826ZM4.15648 5.05123L5.58538 5.87467L2.81976 6.60514L2.51585 5.48404L4.15648 5.05123ZM14.9377 14.3122H3.06273V8.68717H14.9377V14.3122Z" fill="#475367" />
                                </svg>
                                    In flight entertainment</span>}

                                {flight.facilities.inFlightMeal && <span className='flex items-center gap-2'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.3125 4.87532V1.12532C3.3125 0.876682 3.41127 0.638225 3.58709 0.46241C3.7629 0.286594 4.00136 0.187822 4.25 0.187822C4.49864 0.187822 4.7371 0.286594 4.91291 0.46241C5.08873 0.638225 5.1875 0.876682 5.1875 1.12532V4.87532C5.1875 5.12396 5.08873 5.36242 4.91291 5.53824C4.7371 5.71405 4.49864 5.81282 4.25 5.81282C4.00136 5.81282 3.7629 5.71405 3.58709 5.53824C3.41127 5.36242 3.3125 5.12396 3.3125 4.87532ZM15.1875 1.12532V15.5003C15.1875 15.749 15.0887 15.9874 14.9129 16.1632C14.7371 16.3391 14.4986 16.4378 14.25 16.4378C14.0014 16.4378 13.7629 16.3391 13.5871 16.1632C13.4113 15.9874 13.3125 15.749 13.3125 15.5003V12.0628H9.875C9.62636 12.0628 9.3879 11.9641 9.21209 11.7882C9.03627 11.6124 8.9375 11.374 8.9375 11.1253C8.96679 9.60348 9.15876 8.08914 9.51016 6.60813C10.2984 3.34563 11.8094 1.1511 13.8805 0.265947C14.0229 0.204861 14.1782 0.180036 14.3326 0.193692C14.487 0.207348 14.6356 0.25906 14.7651 0.3442C14.8945 0.429341 15.0009 0.545254 15.0746 0.681569C15.1484 0.817884 15.1871 0.970349 15.1875 1.12532ZM13.3125 2.91595C12.2656 4.01595 11.6719 5.65657 11.3414 7.01438C11.0941 8.05736 10.9316 9.11864 10.8555 10.1878H13.3125V2.91595ZM8 1.0472C7.97928 0.798557 7.86064 0.568331 7.67017 0.407167C7.4797 0.246003 7.23302 0.167102 6.98438 0.187822C6.73573 0.208542 6.50551 0.327186 6.34434 0.517652C6.18318 0.708119 6.10428 0.954807 6.125 1.20345L6.4375 4.91126C6.4375 5.49142 6.20703 6.04782 5.7968 6.45806C5.38656 6.86829 4.83016 7.09876 4.25 7.09876C3.66984 7.09876 3.11344 6.86829 2.7032 6.45806C2.29297 6.04782 2.0625 5.49142 2.0625 4.91126L2.375 1.20345C2.38526 1.08033 2.37117 0.956403 2.33353 0.838735C2.2959 0.721066 2.23546 0.611962 2.15566 0.517652C2.07585 0.423343 1.97826 0.345675 1.86844 0.289082C1.75863 0.23249 1.63874 0.198082 1.51562 0.187822C1.39251 0.177563 1.26858 0.191653 1.15091 0.229288C1.03324 0.266923 0.92414 0.327367 0.82983 0.407167C0.735521 0.486967 0.657852 0.584562 0.60126 0.694379C0.544668 0.804195 0.51026 0.924083 0.5 1.0472L0.1875 4.7972C0.1875 4.82376 0.1875 4.84954 0.1875 4.87532C0.188999 5.78931 0.498073 6.67619 1.06495 7.39314C1.63182 8.1101 2.4235 8.6154 3.3125 8.82767V15.5003C3.3125 15.749 3.41127 15.9874 3.58709 16.1632C3.7629 16.3391 4.00136 16.4378 4.25 16.4378C4.49864 16.4378 4.7371 16.3391 4.91291 16.1632C5.08873 15.9874 5.1875 15.749 5.1875 15.5003V8.82767C6.0765 8.6154 6.86818 8.1101 7.43505 7.39314C8.00193 6.67619 8.311 5.78931 8.3125 4.87532C8.3125 4.84954 8.3125 4.82376 8.3125 4.7972L8 1.0472Z" fill="#475367" />
                                </svg>
                                    In flight meal</span>}

                                {flight.facilities.usbPort && <span className='flex items-center gap-2'><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.625 7.25001L15.875 4.43751C15.7357 4.33304 15.5701 4.26943 15.3967 4.25379C15.2233 4.23816 15.049 4.27112 14.8932 4.34898C14.7375 4.42684 14.6065 4.54653 14.515 4.69463C14.4235 4.84274 14.375 5.0134 14.375 5.18751V7.06251H5.9375V3.93751H7.97344C8.19459 4.56302 8.62975 5.09021 9.20201 5.42591C9.77427 5.76161 10.4468 5.88419 11.1007 5.772C11.7546 5.65981 12.3478 5.32006 12.7754 4.81281C13.203 4.30556 13.4376 3.66346 13.4376 3.00001C13.4376 2.33655 13.203 1.69445 12.7754 1.1872C12.3478 0.679948 11.7546 0.340202 11.1007 0.22801C10.4468 0.115818 9.77427 0.238404 9.20201 0.574101C8.62975 0.909799 8.19459 1.43699 7.97344 2.06251H5.625C5.2106 2.06251 4.81317 2.22713 4.52015 2.52015C4.22712 2.81318 4.0625 3.21061 4.0625 3.62501V7.06251H0.9375C0.68886 7.06251 0.450403 7.16128 0.274587 7.33709C0.098772 7.51291 0 7.75137 0 8.00001C0 8.24865 0.098772 8.4871 0.274587 8.66292C0.450403 8.83873 0.68886 8.93751 0.9375 8.93751H4.0625V12.375C4.0625 12.7894 4.22712 13.1868 4.52015 13.4799C4.81317 13.7729 5.2106 13.9375 5.625 13.9375H7.8125V14.25C7.8125 14.6644 7.97712 15.0618 8.27015 15.3549C8.56317 15.6479 8.9606 15.8125 9.375 15.8125H11.875C12.2894 15.8125 12.6868 15.6479 12.9799 15.3549C13.2729 15.0618 13.4375 14.6644 13.4375 14.25V11.75C13.4375 11.3356 13.2729 10.9382 12.9799 10.6452C12.6868 10.3521 12.2894 10.1875 11.875 10.1875H9.375C8.9606 10.1875 8.56317 10.3521 8.27015 10.6452C7.97712 10.9382 7.8125 11.3356 7.8125 11.75V12.0625H5.9375V8.93751H14.375V10.8125C14.375 10.9866 14.4235 11.1573 14.515 11.3054C14.6065 11.4535 14.7375 11.5732 14.8932 11.651C15.049 11.7289 15.2233 11.7619 15.3967 11.7462C15.5701 11.7306 15.7357 11.667 15.875 11.5625L19.625 8.75001C19.7414 8.66268 19.8359 8.54945 19.901 8.41927C19.9661 8.28909 20 8.14555 20 8.00001C20 7.85446 19.9661 7.71092 19.901 7.58074C19.8359 7.45057 19.7414 7.33733 19.625 7.25001ZM10.625 2.06251C10.8104 2.06251 10.9917 2.11749 11.1458 2.2205C11.3 2.32352 11.4202 2.46993 11.4911 2.64124C11.5621 2.81255 11.5807 3.00105 11.5445 3.1829C11.5083 3.36476 11.419 3.53181 11.2879 3.66292C11.1568 3.79403 10.9898 3.88332 10.8079 3.91949C10.626 3.95567 10.4375 3.9371 10.2662 3.86614C10.0949 3.79519 9.94851 3.67502 9.8455 3.52085C9.74248 3.36668 9.6875 3.18543 9.6875 3.00001C9.6875 2.75137 9.78627 2.51291 9.96209 2.33709C10.1379 2.16128 10.3764 2.06251 10.625 2.06251ZM9.6875 12.0625H11.5625V13.9375H9.6875V12.0625ZM16.25 8.93751V7.06251L17.5 8.00001L16.25 8.93751Z" fill="#475367" />
                                </svg>
                                    USB Port</span>}
                            </div>
                        </div>

                        <button onClick={() => { addFlight(flight); toast.success("New flight added to your itinerary") }} className='!w-12 bg-green-400 flex justify-center items-center'>
                            <svg width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" /></svg>
                        </button>
                    </div>))}
                </div>}
            </div>
        </div>
    )
}
