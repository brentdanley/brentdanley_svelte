---
title: Kayaking in Casco Bay
date: 2023-06-24
tags: [kayaking, maine, paddling, adventure, 'casco bay']
---

<script>
    import AdventureMap from '$lib/components/AdventureMap.svelte'

    const tracks = [
        { 
            filename: 'kayaking_casco-bay_20230624.gpx', 
            startLabel: 'Brent',
            startIcon: 'boat'
        }
    ]

    const points = [
        {
            label: "Fort Gorges",
            lat: 43.662995124234904,
            lng: -70.22153148192699
        },
        {
            label: "Eastern Prom",
            lat: 43.67016336913028,
            lng: -70.24260545169285
        },
        {
            label: "Bug Light",
            lat: 43.65525711776943,
            lng: -70.23526946263856
        }
    ]
</script>

<AdventureMap tracks={tracks} points={points} />
