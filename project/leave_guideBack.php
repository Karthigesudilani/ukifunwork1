          <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "ttgms";

        try{
          $conn = mysqli_connect($servername, $username, $password, $dbname);
          
        }

        catch(MySQLi_Sql_Exception $ex){
          echo("error in connection");
        }

        if(isset($_POST['register1'])){
          $guideId = $_POST['guideId']; 
          $gEmail = $_POST['gEmail']; 
          $date = $_POST['date']; 
          $reason = $_POST['reason']; 
                    
          
          $register1_query = "INSERT INTO `leave_guide`(`guideId`, `gEmail`, `date`, `reason`) VALUES ('$guideId', '$gEmail', '$date', '$reason')";

          try{
            $register1_result = mysqli_query($conn, $register1_query);
            if(mysqli_affected_rows($conn)>0){
   echo"<script>alert('registration Successfully');</script>";
    header("location:./Home.php");
               
            }
            else{
             
            echo"<script>alert('error in registration');</script>";
            }
            
          }
          catch(Exception $ex){
            echo("error".$ex->getMessage());
          }
          }
