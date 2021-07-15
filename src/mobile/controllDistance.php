<?php

  $latEmpresa = "-19.64229";
  $lonEmpresa = "-43.87909";

  $latUser = "-19.6378624";
  $lonUser = "-43.8796288";

  function distance($lat_empresa, $lon_empresa, $lat_user, $lon_user){

      $lat_local = deg2rad($lat_empresa);
      $lat_user = deg2rad($lat_user);
      $lon_local = deg2rad($lon_empresa);
      $lon_user = deg2rad($lon_user);

      $latD = $lat_user - $lat_local;
      $lonD = $lon_user - $lon_local;

      $dist = 2 * asin(sqrt(pow(sin($latD / 2), 2) +
      cos($lat_local) * cos($lat_user) * pow(sin($lonD / 2), 2)));

      $dist = $dist * 6371; //calculo para km
      $dist = $dist * 1000; //calculo para converter km para metros
      return number_format($dist, 0, '.', ''); //retorna numero inteiro sem casas decimais, caso queira com cadas decimais mudar o 0 para 2
  }

  $distancia = distance($latEmpresa, $lonEmpresa, $latUser, $lonUser) . " metros de distância do Ponto central";

  echo $distancia;
  echo "<br>";

  echo $distancia<500 ? 'Acesso Liberado' : 'Ooops, Você não está no perimetro exigido.'
?>