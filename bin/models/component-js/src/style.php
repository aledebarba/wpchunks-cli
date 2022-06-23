<?php 
    require_once __DIR__.'/functions/breakpoints.php';

    sass(<<<CSS
    // start of scss code
    
    .%componentname% {
        background-color: #f5f5f5;
        color: #333;
        display: grid;
        place-items: center;
        padding: 16px;
        font-size: 1.5rem;
        border: 3px solid tomato;
        
        $medium {
            font-size: 2rem;
            padding: 32px;
        }
        $large {
            font-size: 2.5rem;
            padding: 64px;
        }

        p {
            strong {
                text-transform: uppercase;
            }
        }
    }
    
    // end of scss code
    CSS, "%componentname%-css-control");
?>