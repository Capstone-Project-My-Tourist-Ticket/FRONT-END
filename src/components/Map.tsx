import { IAddTourType } from "@/utils/apis/pengelola/type"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FieldErrors, UseFormSetValue } from "react-hook-form"
import { Marker } from "react-leaflet"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"

interface MapProps {
  draggable: boolean
  width?: number
  setValue?: UseFormSetValue<IAddTourType>
  error?: FieldErrors<IAddTourType>
  posisi?: { lat: number; lng: number }
}

const Map = (props: MapProps) => {
  const { draggable, width, setValue, error, posisi } = props
  const [dragged, setDragged] = useState<{ lat: number; lng: number }>({
    lat: -6.330995309852224,
    lng: 106.70471191406251,
  })
  const [searchTerm, setSearchTerm] = useState<string>("")
  const mapRef = useRef<any>()
  const marker = useRef<any>()

  const handleMarkerDragEnd = (event: any) => {
    setDragged({
      lat: event.target.getLatLng().lat,
      lng: event.target.getLatLng().lng,
    })
    mapRef.current.panTo(event.target.getLatLng())

    console.log("Marker dragged to:", event.target.getLatLng())
  }

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${searchTerm}&format=jsonv2&limit=1`
      )
      setDragged({
        lat: Number(response.data[0].lat),
        lng: Number(response.data[0].lon),
      })
      setSearchTerm("")
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching geocoding data:", error)
    }
  }

  useEffect(() => {
    mapRef.current?.panTo(marker.current.getLatLng())
    setDragged(posisi!)
    if (setValue) {
      setValue("latitude", Number(dragged.lat))
      setValue("longitude", Number(dragged.lng))
    }
  }, [dragged, posisi])

  /*   const position: LatLngTuple = [latitude, longitude]; */

  return (
    <div>
      <MapContainer
        ref={mapRef}
        style={{ height: 400, width: width }}
        center={dragged}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          ref={marker}
          position={dragged}
          draggable={draggable}
          eventHandlers={{ dragend: handleMarkerDragEnd }}
        />
      </MapContainer>
      <p className="text-sm text-red-500 ">
        {error?.latitude && error.latitude.message}
      </p>
      <p className="text-sm text-red-500 ">
        {error?.longitude && error.longitude.message}
      </p>
      <div className="flex border-slate-300 border-2">
        <input
          className="p-2 w-full outline-none"
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleSearch()
            }
          }}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="p-2 bg-slate-500 text-white"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Map
