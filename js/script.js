/* Fade Animation */

.fade-up{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.fade-up.visible{
    opacity:1;
    transform:translateY(0);
}

/* Mobile Navigation */

@media(max-width:900px){

    .nav{
        display:none;
    }

    .nav.mobile-active{

        display:flex;

        flex-direction:column;

        position:absolute;

        top:90px;
        left:5%;
        right:5%;

        background:#12243c;

        padding:25px;

        border-radius:20px;

        gap:20px;

        text-align:center;

        border:1px solid rgba(255,255,255,.08);

    }

}
