<?php
 $tanggal =   $_GET['Date'];
 $nama =  $_GET['Name'];
 $telepon =   $_GET['Phone'];
 $pesan =   $_GET['Message'];
 $email =   $_GET['Email'];
 $checkbox = $_GET['checkbox'];
 $radio = $_GET['radiop'];

    echo "Nama: $nama <br> Tanggal: $tanggal <br> Telepon: $telepon <br> Pesan: $pesan <br> Email: $email <br> Category: $checkbox <br> Tipe Breakfast: $radio"

?>