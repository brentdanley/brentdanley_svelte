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
            startLabel: 'Rental checkout',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220821_paaq-paaq_2.kml', 
            startLabel: 'Knik Glacier',
            startIcon: 'flight'
        },
        { 
            filename: 'tracklog_20220823_paaq-paaq.kml', 
            startLabel: 'Matanuska Glacier',
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
            label: "2005 Tudor Hills Court",
            lat: 61.17151450501391, 
            lng: -149.84452678241624,
        },
        {
            label: "2010 Tudor Hills Drive",
            lat: 61.17165979366806,
            lng: -149.8453142055231,
        },
        {
            label: "Colony Glacier",
            lat: 61.239444400000004,
            lng: -148.5075,
            type: "photo",
        },
        {
            label: "Knik Glacier",
            lng: -148.2986111,
            lat: 61.3675,
            type: "photo",
        },
        {
            label: "Matanuska Glacier",
            lng: -147.5811111,
            lat: 61.6558333,
            type: "photo",
        },
        {
            label: "Talkeetna Alaska Teleport",
            lat: 62.332909734155294, 
            lng: -150.03225988465874,
            type: "photo",
        }
    ]
</script>

<AdventureMap tracks={tracks} points={points} />

### CTAF Areas

### Visual Reporting Points

### FSS

### Links

[Alaska Floats & Skis](https://alaskafloats.com/) - The best floatplane experience in Alaska!

[Blue River Aviation](https://www.blueriveraviation.com/) - Rent a Cessna 172 in Palmer and fly over the nearby glaciers!

<FlickrPhotoset photoset_id="72177720301779365" />
