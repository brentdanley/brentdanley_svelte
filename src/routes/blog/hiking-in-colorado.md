---
title: Hiking in Colorado
date: 2023-06-11
tags: ['hiking', 'colorado']
---

<script>
    import FlickrPhotoset from '$lib/components/FlickrPhotoset.svelte'
    import AdventureMap from '$lib/components/AdventureMap.svelte'

    const tracks = [
        { 
            filename: 'hike_20230525_colorado_chautauqua.gpx', 
            startIcon: 'hike', 
            startLabel: 'Chautauqua' , 
            color: 'magenta'
        },
        { 
            filename: 'hike_20230526_colorado_flagstaff-mountain.gpx', 
            startIcon: 'hike', 
            startLabel: 'Flagstaff' , 
            color: 'magenta'
        },
        { 
            filename: 'hike_20230527_colorado_ncar-trail.gpx', 
            startIcon: 'hike', 
            startLabel: 'NCAR Trail', 
            color: 'magenta'
        },
        { 
            filename: 'hike_20230530_colorado_boulder-creek.gpx',
            startIcon: 'hike', 
            startLabel: 'Boulder Creek',
            color: 'magenta'
        },
        { 
            filename: 'hike_20230530_colorado_mallory-cave.gpx', 
            startIcon: 'hike', 
            startLabel: 'Mallory Cave Trail' , 
            color: 'magenta'
        }
    ]
    
</script>

<AdventureMap tracks={tracks} />
