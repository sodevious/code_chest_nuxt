<template>
    <div class="d-flex justify-content-around bg-gray-800 p-sm-2 py-md-4 pt-3">
        <div class="d-block text-center">
            <img src="https://cdn.worldvectorlogo.com/logos/microsoft-windows-11.svg" alt="windows" height="48px" />
            <h5 class="text-sm mt-2 flash">Windows</h5>
        </div>
        <div class="d-block text-center">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d747114f-d4d0-4093-8ac9-c30bbcfb9983/da8vkqc-1a8ca515-668e-4b6f-bb9f-d5ad92d9cf0b.png/v1/fill/w_806,h_992,strp/_late_gift_silver_apple_logo_vector_1__by_windytheplaneh_da8vkqc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1NiIsInBhdGgiOiJcL2ZcL2Q3NDcxMTRmLWQ0ZDAtNDA5My04YWM5LWMzMGJiY2ZiOTk4M1wvZGE4dmtxYy0xYThjYTUxNS02NjhlLTRiNmYtYmI5Zi1kNWFkOTJkOWNmMGIucG5nIiwid2lkdGgiOiI8PTUwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HweC4X3X8Oj_Ajneb9O0cSUpByjI2fVTar8yD5szNso"
                alt="apple" height="48px" />
            <h5 class="text-sm mt-2 flash">iOS</h5>
        </div>
        <div class="d-block text-center">
            <img src="https://emteria.com/hubfs/Emteria_Images/OS/emteria-os-android.svg" alt="android" height="48px" />
            <h5 class="text-sm mt-2 flash">Android</h5>
        </div>
        <div class="d-block text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tux_Enhanced.svg/154px-Tux_Enhanced.svg.png"
                alt="linux" height="48px" />
            <h5 class="text-sm mt-2 flash">Linux</h5>
        </div>
        <div class="d-block text-center">
            <img src="https://www.qservicesit.com/wp-content/uploads/2022/01/355-3557482_flutter-logo-png-transparent-png.png"
                alt="flutter" height="48px" />
            <h5 class="text-sm mt-2 flash">Flutter</h5>
        </div>
        <div class="d-block text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Crystal_Project_web.png" alt="web"
                height="48px" />
            <h5 class="text-sm mt-2 flash">Web</h5>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 768px) {
    img {
        height: 60px;
    }
}

@media (max-width: 300px) {
    img {
        height: 40px;
    }
}

img {
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 200ms ease-in;
    filter: grayscale(1) opacity(.8);
}

img:hover {
    filter: grayscale(0) opacity(1);
}

img::before,
img::after {
    transform: scaleY(-1);
}

/*reflection*/
img:hover::after {
    content: '';
    background-image: inherit;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    width: inherit;
    height: 40%;
    position: absolute;
    bottom: -25%;
}

/*fade reflection*/
img:hover::before {
    content: '';
    width: inherit;
    height: 42%;
    position: absolute;
    bottom: -25%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, .9), rgba(255, 255, 255, .5));
    z-index: 1;
}

.flash {
    color: rgba(255, 255, 255, .8);
}
</style>