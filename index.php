
        <?php
        $ceu = [
            "Italy" => "Rome", //$key => $value
            "Luxembourg" => "Luxembourg",
            "Belgium" => "Brussels",
            "Denmark" => "Copenhagen",
            "Finland" => "Helsinki",
            "France" => "Paris",
            "Slovakia" => "Bratislava",
            "Slovenia" => "Ljubljana",
            "Germany" => "Berlin",
            "Greece" => "Athens",
            "Ireland" => "Dublin",
            "Netherlands" => "Amsterdam",
            "Portugal" => "Lisbon",
            "Spain" => "Madrid",
            "Sweden" => "Stockholm",
            "United Kingdom" => "London",
            "Cyprus" => "Nicosia",
            "Lithuania" => "Vilnius",
            "Czech Republic" => "Prague",
            "Estonia" => "Tallin",
            "Hungary" => "Budapest",
            "Latvia" => "Riga",
            "Malta" => "Valetta",
            "Austria" => "Vienna",
            "Poland" => "Warsaw",
        ] ;

    foreach ($ceu as $key => $value) {
         echo $key . ' = ' . $value . '<br>';
     }

        echo '<hr>';

        sort($ceu);
        $ceuLength = count($ceu);
        for($x = 0; $x < $ceuLength; $x++) {
            echo $ceu[$x];
            echo "<br>";
        }

        echo '<hr>';

        $temperatures = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];
        $average = array_sum($temperatures) / count($temperatures);
        echo 'Vidutine temperatura: ' . $average . '<br>';
        $averageSuapvalinta = ceil($average);
        echo 'Suapvalinta temperatura yra: ' . $averageSuapvalinta . '<hr>';

        rsort($temperatures);

        $temperaturesSurykiuotos = count($temperatures);
        for($yt = 0; $yt < $temperaturesSurykiuotos; $yt++) {
          //  echo $temperatures[$yt];
        }

        $sliced_array = array_slice($temperatures, 0, 5);
        echo $sliced_array;
