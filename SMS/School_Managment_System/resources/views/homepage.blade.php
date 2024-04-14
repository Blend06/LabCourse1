<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<style>
    
    header{
        display: flex;
        justify-content: space-between;
        height: 100px;
    }
    .logo{
        display: flex;
    }
    .login{
        display: flex;
        
    }
    .grup{
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; 
    }
    .sllogani{
        display: flex;
        position: relative;
        width: 100vw;
    height: 100vh; 
    overflow: hidden;
    }
    .overlayimg{
        position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    }
    .overlay {
    width: 420px; 
    height: 600px;
    margin-left: 900px;
    margin-top: 50px;
}
</style>
<body>
    <header>
        <div class="logo">
        <img src="{{ URL('foto/img_rectangle_2.png') }}" alt="logo">
        <p>AcademixPRO</p>
        </div>
        <div class="login">
            <p style="margin-right: 20px;">Contact</p>
            <p>Login</p>
        </div>
    </header>
    <div class="sllogani">
        <img src="{{ URL('foto/img_group_18.png') }}" alt="grupi" class="grup">
        <div>
            <div>
                <p>STUDENT SUCCESS STARTS HERE</p>
            </div>
            <div>
                <p>ITS MORE THAN JUST A SLOGAN - ITS OUR GUIDING PRINCIPLE</p>
            </div>
        </div>
        <div class="overlayimg">
            <img src="{{ URL ('foto/img_rectangle_7.png') }}" alt="" class="overlay">
        </div>
    </div>
</body>
</html>