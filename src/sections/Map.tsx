import { indiaStatesCoordinates } from "@/service/statedata";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      className="w-full h-[120vh]"
      center={[20.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {indiaStatesCoordinates?.map((item) => (
        <Marker key={item?.loc} position={[item?.latitude, item?.longitude]}>
          <Popup>
            <div className="">
              <h2 className="text-[18px] font-semibold border-black border-b">
                {item?.loc}
              </h2>

              <p>total:case {item?.confirmedCasesIndian}</p>
              <p>Discharged: {item?.discharged}</p>
              <p>Deaths: {item?.deaths}</p>
              <p>
                Total active:{" "}
                {item?.confirmedCasesIndian - item?.deaths - item?.discharged}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
