---
title: Flying in Alaska 2022
date: 2023-06-14
tags: [flying, flight, aviation, adventure, alaska]
---

<script>
    import FlickrPhotoset from '$lib/components/FlickrPhotoset.svelte'
    import AdventureMap from '$lib/components/AdventureMap.svelte'

    const tracks = [
        { 
            filename: 'tracklog_20220821_paaq-paaq.kml', 
            startLabel: 'PAAQ',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220821_paaq-paaq_2.kml', 
            startLabel: 'PAAQ',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220823_paaq-paaq.kml', 
            startLabel: 'PAAQ',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220827_ak8-ak8.kml', 
            startLabel: 'Day 1, Flight 1',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220827_ak8-ak8_2.kml', 
            startLabel: 'Day 1, Flight 2',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220828_ak8-ak8.kml', 
            startLabel: 'Day 2, Flight 1',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220828_ak8-ak8_2.kml', 
            startLabel: 'Day 2, Flight 2',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220829_ak8-ak8.kml', 
            startLabel: 'Day 3, Flight 1',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220829_ak8-ak8_2.kml', 
            startLabel: 'Day 3, Flight 2',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220829_ak8-ak8_3.kml', 
            startLabel: 'Day 3, Flight 3',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220830_ak8-ak8.kml', 
            startLabel: 'Checkride, Part 1',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220830_ak8-ak8_2.kml', 
            startLabel: 'Day 4, Flight 2',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220830_ak8-ak8_3.kml', 
            startLabel: 'Checkride, Part 2',
            startIcon: 'flight'
        },
    ]

    const points = [
        {
            label: "Mom's Cabin",
            lat: 61.615759768335884, 
            lng: -149.57266027404367,
        },
        {
            label: "Larson Lake",
            lat: 62.34017612215627, 
            lng: -149.88976198681834,
        },
        {
            label: "Rockys Lakes",
            lat: 62.13961774752685, 
            lng: -150.25414680486332,
        },
        {
            label: "Fish Lake",
            lat: 62.25069539630341, 
            lng: -150.06692559621044,
        },
        {
            label: "Springer Stables",
            lat: 61.57177169203703,
            lng: -149.09123842818076
        },
        {
            label: "Brent's House",
            lat: 61.17151450501391, 
            lng: -149.84452678241624
        }
    ]
</script>

<AdventureMap tracks={tracks} points={points} />

<FlickrPhotoset photoset_id="72177720301779365" />
