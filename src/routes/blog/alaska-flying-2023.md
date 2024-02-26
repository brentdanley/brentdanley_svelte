---
title: Alaska 2023
date: 2023-09-25
tags: [flying, flight, aviation, adventure, alaska, travel]
---

<script>
    import FlickrPhotoset from '$lib/components/FlickrPhotoset.svelte'
    import AdventureMap from '$lib/components/AdventureMap.svelte'

    const tracks = [
        { 
            filename: 'alaska_20230807_paaq-paaq.kml',
            startLabel: 'Rental checkout',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230808_ak8-spink.kml',
            startLabel: 'Out to Spink Lake',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230808_spink-ak8.kml',
            startLabel: 'Spink Lake to AK8',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230810_knik-with-jeremy.kml',
            startLabel: 'Glaciers with Jeremy',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230811_ak8-chalatna.kml',
            startLabel: 'Out to Chalatna Lake',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230811_chalatna-camera-recovery.kml',
            startLabel: 'Camera recovery',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230811_chalatna-ak8.kml',
            startLabel: 'Chalatna Lake to AK8',
            startIcon: 'flight'
        },
        { 
            filename: 'alaska_20230809_fishing.gpx',
            startLabel: 'Fishing in Beverly Lake',
            startIcon: 'boat'
        },
        { 
            filename: 'alaska_20230811_fishing.gpx',
            startLabel: 'Fishing in Beverly Lake',
            startIcon: 'boat'
        },
    ]

    const points = [
        {
            label: "Mom's Cabin",
            lat: 61.615759768335884, 
            lng: -149.57266027404367,
        },
        {
            label: "Springer Stables",
            lat: 61.57177169203703,
            lng: -149.09123842818076
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
        },
        {
            label: "Chalatna Lake",
            lat: 62.48202743797692,
            lng: -151.46020107597855,
            type: "photo",
        },
        {
            label: "Spink Lake",
            lat: 62.78023623893523,
            lng: -150.24019525635345,
            type: "photo",
        }
    ]

    const sectionals = ['anc']
</script>

<AdventureMap tracks={tracks} points={points} sectionals={sectionals} />

[Alaska Floats & Skis](https://alaskafloats.com/) - The best floatplane experience in Alaska!

[Blue River Aviation](https://www.blueriveraviation.com/) - Rent a Cessna 172 in Palmer and fly over the nearby glaciers!

<FlickrPhotoset photoset_id="72177720310368251" />
