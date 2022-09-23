<?php
// API to get all news from DB
include('connection.php');
$stmt = $mysqli->prepare("SELECT * from news");
        if(!$stmt->execute()) {
            die("News Execution Failed");
        }

        $results = $stmt->get_result();
        $response = [];
        while($result = $results->fetch_assoc()) {
            $response[] = $result;
        }

        echo json_encode($response);
 ?>
