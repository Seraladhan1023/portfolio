<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <title>Document</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>

<body>
     

    <div id="hamburger-navbar"></div>
    <div id="navbar" class="open"></div>
    <div id="body">

    </div>
    <div class="errors">
        @if($errors->any()){
           <script>
             alert("{{ implode(' ', $errors->all()) }}");
             // alert("{implode('',$errors->all('message'))}");
           </script> 
            
        }
        @endif

        @if(session('success'))
        <script>
            alert("{{ session('success') }}");
        </script>
        @endif
    </div>


</body>

</html>