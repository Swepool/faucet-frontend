<script>
    import {quadInOut} from "svelte/easing";
    import {draw} from "svelte/transition";
</script>

<svg version="1.1" width="50px" height="50px" viewBox="0 0 422.0 422.0" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <clipPath id="10311745115971191025010052">
            <path d="M243.5,18.7638837 L361.23136,86.7361163 C381.34243,98.3472479 393.73136,119.805504 393.73136,143.027767 L393.73136,278.972233 C393.73136,302.194496 381.34243,323.652752 361.23136,335.263884 L243.5,403.236116 C223.38893,414.847248 198.61107,414.847248 178.5,403.236116 L60.7686398,335.263884 C40.6575698,323.652752 28.2686398,302.194496 28.2686398,278.972233 L28.2686398,143.027767 C28.2686398,119.805504 40.6575698,98.3472479 60.7686398,86.7361163 L178.5,18.7638837 C198.61107,7.15275208 223.38893,7.15275208 243.5,18.7638837 Z"></path>
        </clipPath>
    </defs>
    <g transform="">
        <g clip-path="url(#10311745115971191025010052)">
            <path in:draw="{{duration:500, easing: quadInOut}}" d="M243.5,18.7638837 L361.23136,86.7361163 C381.34243,98.3472479 393.73136,119.805504 393.73136,143.027767 L393.73136,278.972233 C393.73136,302.194496 381.34243,323.652752 361.23136,335.263884 L243.5,403.236116 C223.38893,414.847248 198.61107,414.847248 178.5,403.236116 L60.7686398,335.263884 C40.6575698,323.652752 28.2686398,302.194496 28.2686398,278.972233 L28.2686398,143.027767 C28.2686398,119.805504 40.6575698,98.3472479 60.7686398,86.7361163 L178.5,18.7638837 C198.61107,7.15275208 223.38893,7.15275208 243.5,18.7638837 Z"
                  stroke="#FF0000" stroke-width="50" fill="none" stroke-miterlimit="5"></path>
        </g>
        <g transform="translate(86.75688990614773 211.03529506467882) rotate(-44.99999999999999)">
            <g transform="translate(89.49932445491959 0.0)">
                <path in:draw="{{duration:500, delay: 100, easing: quadInOut}}" d="M0.5,0 L0.5,170" stroke="#FF0000" stroke-width="25" fill="none" stroke-linecap="round"
                      stroke-miterlimit="10"></path>
            </g>
            <g transform="translate(0.0 84.74657441706154)">
                <path in:draw="{{duration:500, delay: 200, easing: quadInOut}}"  d="M179.999324,0.253425583 L0,0.746574417" stroke="#FF0000" stroke-width="25" fill="none"
                      stroke-linecap="round" stroke-miterlimit="10"></path>
            </g>
        </g>
    </g>
</svg>