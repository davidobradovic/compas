import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';


//icons
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai'

function OrderModal({ setModalStatus }) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyACKt4Y_oqEF7CUDVcRzJ5Cozzrwsi4jCs",
        libraries: ['places']
    })

    const center = {
        lat: 43.733445,
        lng: 18.560294
    };

    const [map, setMap] = useState(/** @type google.maps.Map */)
    const [ directionsResponse, setDirectionsResponse ] = useState(null)
    const [ distance, setDistance ] = useState('')
    const [ duration, setDuration ] = useState('')

    const onLoad = useCallback(async function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

       await setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', top: 0, right: 0 }} className='absolute flex items-center justify-center'>
            <div className='p-3 w-2/3 h-4/5 bg-white relative overflow-auto'>
                <h1 className='font-semibold text-center pb-3'>Narudzba #140917</h1>
                <div className='infos-container pb-3' >
                    <h1 className='text-xs mb-1'>Osnovne informacije</h1>
                    <table className='w-full'>
                        <tbody className='flex flex-col w-full gap-2'>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Objekat</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>Veleprodaja</td>
                            </tr>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Proizvod</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>iPhone 14 PRO MAX</td>
                            </tr>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Kolicina</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>5 kom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className='infos-container py-3' >
                    <h1 className='text-xs mb-1'>Administrativne informacije</h1>
                    <table className='w-full'>
                        <tbody className='flex flex-col w-full gap-2'>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Datum prihvatanja narudzbe</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>25.10.2023 u 18.23h</td>
                            </tr>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Odgovorna osoba</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>David Obradovic</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className="infos-container py-3">
                    <h1 className='text-xs mb-1'>Transportne informacije</h1>
                    <table className='w-full'>
                        <tbody className='flex flex-col w-full gap-2'>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Transporter</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>Ajdin Ajdinovic</td>
                            </tr>
                            <tr className='w-full flex items-center'>
                                <td className='w-1/2 bg-gray-50 p-3 text-sm font-semibold'>Vozilo</td>
                                <td className='w-1/2 bg-gray-100 p-3 text-sm'>Volkswagen Caddy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ height: 1 }} className='map-container w-full bg-gray-200'></div>
                <div className="w-full py-3">
                    <GoogleMap
                        mapContainerStyle={{
                            width: '100%',
                            height: 295,
                        }}
                        center={center}
                        zoom={15}
                        options={{
                            scaleControl: false,
                            scrollwheel: false,
                            zoomControl: false,
                            zoomControlOptions: false,
                            streetViewControl: false,
                            mapTypeControl: false
                        }}
                        onLoad={onLoad}
                        streetView={false}
                        onUnmount={onUnmount}
                    >
                    </GoogleMap>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className="status-container w-full flex items-center my-3 bg-black text-white p-3">
                    <h1 className='w-1/2 text-sm' >STATUS NARUDZBE</h1>
                    <h3 className='w-1/2 text-sm font-bold text-yellow-400 text-center flex items-center justify-center gap-3' >NA CEKANJU <AiOutlineClockCircle size={22} /> </h3>
                </div>
                <div style={{ height: 1 }} className='w-full bg-gray-200'></div>
                <div className="pt-3 flex items-center">
                    <button className='bg-green-400 text-white w-1/2 p-3 flex items-center justify-center text-sm font-bold gap-1'>POTVRDI NARUDZBU <AiOutlineCheckCircle size={22} /></button>
                    <button className='bg-red-400 text-white w-1/2 p-3 flex items-center justify-center text-sm font-bold gap-1'>OKTAZI NARUDZBU <AiOutlineClose size={22} /></button>
                </div>
            </div>
            <button onClick={setModalStatus} className='absolute top-3 right-3 bg-black p-3 text-white'><AiOutlineClose /></button>
        </div>
    ) : (
        <div>
            <h1>NEMA</h1>
        </div>
    )
}

export default OrderModal