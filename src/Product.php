<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Product.css">
    <title>Product Display</title>
</head>
<header>
    <!-- Navigation and other static content here -->
</header>

<body>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "books";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT product_id, product_name, product_price, product_image FROM products";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo "<div class='product'><img src='".$row["product_image"]."' alt='Product Image' class='product_image'><h2 class='product_title'>".$row["product_name"]."</h2><p class='product_price'>$".$row["product_price"]."</p><button onclick='addToBasket(\"".$row["product_id"]."\")'>Add to Basket</button></div>";
      }
    } else {
      echo "No results found.";
    }
    $conn->close();
    ?>
    <script>
        function addToBasket(productId) {
            console.log("Added to basket:", productId);
            // Add JavaScript to manage basket operations here
        }
    </script>
</body>
</html>
