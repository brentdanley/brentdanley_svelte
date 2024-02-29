---
title: Instrument Flying Lesson
date: '2024-02-28'
tags: [flying, 'instrument lesson', ifr]
---

<script>
    import AdventureMap from '$lib/components/AdventureMap.svelte'

    const tracks = [
        { 
            filename: 'ifr_20240228_kpwm-kpwm.kml', 
            startLabel: 'Start',
            startIcon: 'flight'
        }
    ]

    const plates = [
        "kpwm_rnav11"
    ]

    const sectionals = ["ny"]

</script>

Flew John's flight simulator last evening. Did a couple of approaches to KPWM RNAV 11.

### Takeaways

If the controller gives vectors to final after the approach is loaded, either change the procedure to _Vectors to Final_ or activate the leg in the flight plan for the Final Approach Fix.

Make heading corrections on final to reintercept the final approach course, then fly that correction wings level, as being in a constant turn will make the intercept angle too acute, requiring excessive bank at intercept or blowing past it altogether.

<AdventureMap tracks={tracks} plates={plates} sectionals={sectionals} />
