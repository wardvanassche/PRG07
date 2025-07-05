import {useEffect, useState} from "react";

export default function useHotspots() {
    const [hotspots, setHotspots] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("https://data.rivm.nl/geo/alo/wfs?request=GetFeature&service=WFS&version=1.1.0&outputFormat=application%2Fjson&typeName=alo:rivm_drinkwaterkranen_actueel")
            const data = await response.json()
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