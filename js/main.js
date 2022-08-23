/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Nika Stanic
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    let valcelsius = Number(prompt('Température en Celsius : '));
    let valFahrenheit = (valcelsius * 9) / 5 + 32;

    alert(`${valcelsius}[°C] = ${valFahrenheit}[°F]`);


}()); // Main IIFE

