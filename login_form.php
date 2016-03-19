<?php
	session_start();
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Jojo's Dog Grooming - Sign In/Register</title>
        <link rel="stylesheet" href="Style/base.css" media="screen">
        <link rel="stylesheet" href="Style/printstyle.css" media="print">
    </head>
    
    <body>
        
        <div id="signin">
            <?php
			$sql="SELECT * FROM $tbl_name ORDER BY id DESC";
			$result=mysql_query($sql);
			$count = min(5, mysql_num_rows($result));
			if($count==0)
				echo "<li>No topics</li>";
			else
				for($i=0; $i < $count; $i++){
					$row=mysql_fetch_array($result);
					echo '<li><a href="view_topic.php?id='.$row['id'].'">'.$row['topic'].'</a></li>';
				}
		    ?>
            <br>
		    <?php
			if (isLoggedIn()){
				echo '<a href="logout.php">Logout</a><br/>';
				echo '<a href="forum.php">Go to forum</a><br/>';
				echo '>><a href="add_topic_form.php">Create new topic</a>';
			} else {
				echo '<a href="login_form.php">Login</a><br/>';
				echo '<a href="register_form.php">New user?</a>';
			}
		    ?>
        </div> 
        <header>
		    <a href="index.html"><h1><img src="Images/logo.png"
                 width="200" height="200" alt="Jojo's Dog Grooming-Home"></h1></a>
		</header>
        <nav>
            <div class="dropdown">
                <ul id="nav">
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="services.html" id="drop">Services</a>
					    <div class="dropdowncontent">
						    <ul>
                                <li><a href="Services/pricing.html">Pricing</a></li>
					            <li><a href="Services/booking.html">Booking</a></li>
					            <li><a href="Services/faqs.html">FAQs</a></li>
                            </ul>
			            </div></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        
		<div id="content">
            <div id="leftcol">
				<img src="Images/alaskanEskimo.png" height="250" width="250" alt="alaskan eskimo">
			</div>
			<div id="rightcol">
				<!--Regstration form begins here-->
				<h2>Login</h2>
                    <?php
	                    if( isset($_SESSION['ERRMSG_ARR']) && is_array($_SESSION['ERRMSG_ARR']) && count($_SESSION['ERRMSG_ARR']) >0 ) {
		                    echo '<ul class="err">';
		                    foreach($_SESSION['ERRMSG_ARR'] as $msg) {
			                    echo '<li>',$msg,'</li>'; 
		                    }
		                    echo '</ul>';
		                    unset($_SESSION['ERRMSG_ARR']);
	                    }
                    ?>
                    <p>&nbsp;</p>
                    <form id="loginForm" name="loginForm" method="post" action="login.php">
                        <table width="300" border="0" align="center" cellpadding="2" cellspacing="0">
                            <tr>
                                <td width="112"><b>Login</b></td>
                                <td width="188"><input name="login" type="text" class="textfield" id="login" /></td>
                            </tr>
                            <tr>
                                <td><b>Password</b></td>
                                <td><input name="password" type="password" class="textfield" id="password" /></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td><input type="submit" name="Submit" value="Login" /></td>
                            </tr>
                        </table>
            </div>
        </div>
		<footer id="footer">
		    <div id="footernav">
                <ul>
                    <li><a href="signIn.html">Sign in / Register</a></li>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="services.html">Services</a>
                    <li><a href="Services/pricing.html">Pricing</a></li>
					<li><a href="Services/booking.html">Booking</a></li>
					<li><a href="Services/faqs.html">FAQs</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                </ul>
            </div>
            <p>Follow us:</p>
            <p><a href="#"><img src="Images/facebook.png"
                 width="50" height="50" alt="Facebook"></a>
                <a href="#"><img src="Images/instagram.png"
                 width="50" height="50" alt="instagram"></a>
                <a href="#"><img src="Images/twitter.png"
                 width="50" height="50" alt="Twitter"></a></p>
		</footer>
        <script src="Script/signIn.js"></script>
    </body>
</html>