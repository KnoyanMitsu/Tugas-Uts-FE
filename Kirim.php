<?php
 $tanggal =   $_POST['Date'];
 $nama =  $_POST['Name'];
 $telepon =   $_POST['Phone'];
 $pesan =   $_POST['Message'];
 $email =   $_POST['Email'];
 $checkbox = $_POST['checkbox'];
 $radio = $_POST['radiop'];

    echo "Nama: $nama <br> Tanggal: $tanggal <br> Telepon: $telepon <br> Pesan: $pesan <br> Email: $email <br> Category: $checkbox <br> Tipe Breakfast: $radio"

?>