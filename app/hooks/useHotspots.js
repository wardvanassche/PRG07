import {useEffect, useState} from "react";

export default function useHotspots() {
    const [hotspots, setHotspots] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("https://services7.arcgis.com/21GdwfcLrnTpiju8/arcgis/rest/services/Watertappunten/FeatureServer/0/query?where=1%3D1&outFields=AANLEGJAAR,BEMALINGSGEBIED,systeem_id,KNOOPNUMMER&outSR=4326&f=json")
            const data = await response.json()
            console.log(data.features)
            setHotspots(data.features)
        } catch (error) {
            console.log("Error fetching hotspots:", error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return {hotspots, loading}
}