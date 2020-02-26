import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useLocation from "../hooks/useLocation";

const Map = () => {
  const location = useLocation();
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 2
  });
  const [query, setQuery] = useState("");
  const [data, setData] = useState({
    latitude: location ? location.latitude : 0,
    longitude: location ? location.longitude : 0
  });

  const findLocal = async e => {
    e.preventDefault();
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyDf5DKPtJ5T-_hSbvF12ff2Cebm2DfRh_E`
    )
      .then(response => response.json())
      .then(
        data => (
          setViewport({
            ...viewport,
            latitude: data.results[0].geometry.location.lat,
            longitude: data.results[0].geometry.location.lng,
            transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
            transitionDuration: "auto"
          }),
          setData({
            latitude: data.results[0].geometry.location.lat,
            longitude: data.results[0].geometry.location.lng
          })
        )
      );
  };

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (location) {
      setViewport(vp => ({
        ...vp,
        ...location,
        zoom: 8
      }));
    }
  }, [location, setViewport]);

  return (
    <>
      <div>
        <form onSubmit={e => findLocal(e)}>
          <input
            placeholder="Local.."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZGMxOTkxbGF1IiwiYSI6ImNrNThnM3ZrMDBuMGwzdXBhMDk5NjF3NTYifQ.cW1jTslqKamBj0N2wozCQg"
        }
        {...viewport}
        onViewportChange={vp => setViewport(vp)}
      >
        <Marker
          latitude={data.latitude}
          longitude={data.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <span style={{ fontSize: `${viewport.zoom * 0.5}rem` }}>📸</span>
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default Map;
