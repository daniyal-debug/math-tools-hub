import {
    Ruler, Weight, Thermometer, Square, Box, Clock, Gauge, Wind,
    Zap, Power, HardDrive, Compass, Radio, Fuel, Wifi, Magnet,
    Droplets, CircuitBoard
} from 'lucide-react'

// ─── Helper: Temperature needs special conversion (not multiplicative) ───

const tempConversions = {
    celsius: { toBase: (v) => v, fromBase: (v) => v },
    fahrenheit: { toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => v * 9 / 5 + 32 },
    kelvin: { toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
    rankine: { toBase: (v) => (v - 491.67) * 5 / 9, fromBase: (v) => v * 9 / 5 + 491.67 },
}

// ─── Converter Categories ────────────────────────────────────────────────

export const converterCategories = [
    // ── 1. LENGTH ──────────────────────────────────────────────────────
    {
        id: 'length',
        name: 'Length',
        description: 'Convert between meters, feet, inches, kilometers, miles, and more.',
        icon: Ruler,
        color: 'cyan',
        seoTitle: 'Length Converter — Meters, Feet, Inches, Km, Miles | Math Tools Hub',
        metaDescription: 'Free online length converter. Instantly convert between meters, feet, inches, kilometers, miles, yards, centimeters, millimeters, and more with high precision.',
        units: [
            { id: 'meter', name: 'Meter', symbol: 'm', toBase: 1 },
            { id: 'kilometer', name: 'Kilometer', symbol: 'km', toBase: 1000 },
            { id: 'centimeter', name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
            { id: 'millimeter', name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
            { id: 'micrometer', name: 'Micrometer', symbol: 'μm', toBase: 1e-6 },
            { id: 'nanometer', name: 'Nanometer', symbol: 'nm', toBase: 1e-9 },
            { id: 'mile', name: 'Mile', symbol: 'mi', toBase: 1609.344 },
            { id: 'yard', name: 'Yard', symbol: 'yd', toBase: 0.9144 },
            { id: 'foot', name: 'Foot', symbol: 'ft', toBase: 0.3048 },
            { id: 'inch', name: 'Inch', symbol: 'in', toBase: 0.0254 },
            { id: 'nautical-mile', name: 'Nautical Mile', symbol: 'nmi', toBase: 1852 },
        ],
        faqItems: [
            { q: 'How many feet are in a meter?', a: 'One meter equals approximately 3.28084 feet.' },
            { q: 'How do I convert kilometers to miles?', a: 'Multiply the number of kilometers by 0.621371 to get miles.' },
            { q: 'What is a nautical mile?', a: 'A nautical mile is 1,852 meters, used in aviation and maritime navigation.' },
        ],
        seoContent: 'Length is one of the most fundamental measurements in science and everyday life. Whether you are measuring the dimensions of a room in feet and inches, calculating driving distances in kilometers and miles, or working with microscopic measurements in micrometers and nanometers, accurate length conversion is essential. Our length converter supports all major units including meters, kilometers, centimeters, millimeters, miles, yards, feet, inches, and nautical miles. The metric system, based on the meter, is used worldwide in science and by most countries. The imperial system, using feet, inches, yards, and miles, remains common in the United States and United Kingdom. Converting between these systems is straightforward with our tool — simply enter a value, select your units, and get instant results with high precision. Engineers, architects, students, and travelers all benefit from quick, reliable length conversions every day.',
    },

    // ── 2. WEIGHT / MASS ──────────────────────────────────────────────
    {
        id: 'weight',
        name: 'Weight',
        description: 'Convert between kilograms, pounds, grams, ounces, and more.',
        icon: Weight,
        color: 'orange',
        seoTitle: 'Weight Converter — Kg, Pounds, Grams, Ounces | Math Tools Hub',
        metaDescription: 'Free online weight and mass converter. Convert kilograms to pounds, grams to ounces, and more with instant, precise results.',
        units: [
            { id: 'kilogram', name: 'Kilogram', symbol: 'kg', toBase: 1 },
            { id: 'gram', name: 'Gram', symbol: 'g', toBase: 0.001 },
            { id: 'milligram', name: 'Milligram', symbol: 'mg', toBase: 1e-6 },
            { id: 'microgram', name: 'Microgram', symbol: 'μg', toBase: 1e-9 },
            { id: 'metric-ton', name: 'Metric Ton', symbol: 't', toBase: 1000 },
            { id: 'pound', name: 'Pound', symbol: 'lb', toBase: 0.45359237 },
            { id: 'ounce', name: 'Ounce', symbol: 'oz', toBase: 0.028349523125 },
            { id: 'stone', name: 'Stone', symbol: 'st', toBase: 6.35029318 },
            { id: 'us-ton', name: 'US Ton (Short)', symbol: 'ton', toBase: 907.18474 },
            { id: 'imperial-ton', name: 'Imperial Ton (Long)', symbol: 'long ton', toBase: 1016.0469088 },
        ],
        faqItems: [
            { q: 'How many pounds are in a kilogram?', a: 'One kilogram equals approximately 2.20462 pounds.' },
            { q: 'What is the difference between a US ton and a metric ton?', a: 'A US (short) ton is 2,000 pounds (907.18 kg), while a metric ton is 1,000 kg (2,204.62 pounds).' },
            { q: 'How many ounces are in a pound?', a: 'There are exactly 16 ounces in one pound.' },
        ],
        seoContent: 'Weight and mass conversion is used daily in cooking, shipping, fitness, science, and manufacturing. Whether you need to convert kilograms to pounds for a recipe, calculate shipping weight in ounces, or work with metric tons in logistics, our converter handles it all. The kilogram is the SI base unit of mass, while the pound is the standard unit in the imperial system. Our tool supports kilograms, grams, milligrams, micrograms, metric tons, pounds, ounces, stones, and both US (short) and imperial (long) tons. Precision matters — especially in pharmaceutical, scientific, and industrial applications — and our converter delivers results with full decimal accuracy. Students, chefs, athletes tracking macros, and logistics professionals all rely on quick weight conversions throughout their work.',
    },

    // ── 3. TEMPERATURE ────────────────────────────────────────────────
    {
        id: 'temperature',
        name: 'Temperature',
        description: 'Convert between Celsius, Fahrenheit, Kelvin, and Rankine.',
        icon: Thermometer,
        color: 'coral',
        seoTitle: 'Temperature Converter — Celsius, Fahrenheit, Kelvin | Math Tools Hub',
        metaDescription: 'Convert temperatures between Celsius, Fahrenheit, Kelvin, and Rankine instantly. Free, accurate online temperature converter.',
        isCustomConversion: true,
        units: [
            { id: 'celsius', name: 'Celsius', symbol: '°C', ...tempConversions.celsius },
            { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', ...tempConversions.fahrenheit },
            { id: 'kelvin', name: 'Kelvin', symbol: 'K', ...tempConversions.kelvin },
            { id: 'rankine', name: 'Rankine', symbol: '°R', ...tempConversions.rankine },
        ],
        faqItems: [
            { q: 'How do I convert Celsius to Fahrenheit?', a: 'Multiply the Celsius value by 9/5 and add 32. Formula: °F = (°C × 9/5) + 32.' },
            { q: 'What is absolute zero?', a: 'Absolute zero is 0 Kelvin, −273.15°C, or −459.67°F — the lowest possible temperature.' },
            { q: 'What is the boiling point of water in Fahrenheit?', a: 'Water boils at 212°F (100°C) at standard atmospheric pressure.' },
        ],
        seoContent: 'Temperature conversion is essential in science, cooking, weather, and international travel. Celsius is used by most of the world, Fahrenheit is standard in the United States, Kelvin is the SI unit used in scientific research, and Rankine is used in some engineering contexts. Unlike length or weight, temperature conversion is not a simple multiplication — it requires formulas. For example, to convert Celsius to Fahrenheit, multiply by 9/5 and add 32. Our converter handles all four temperature scales with precise mathematical formulas, giving you instant results. Whether you are checking weather forecasts across countries, setting oven temperatures for recipes, or doing thermodynamics homework, this tool has you covered.',
    },

    // ── 4. AREA ───────────────────────────────────────────────────────
    {
        id: 'area',
        name: 'Area',
        description: 'Convert between square meters, acres, hectares, square feet, and more.',
        icon: Square,
        color: 'green',
        seoTitle: 'Area Converter — Square Meters, Acres, Hectares | Math Tools Hub',
        metaDescription: 'Free area unit converter. Convert square meters, square feet, acres, hectares, and more instantly with precision.',
        units: [
            { id: 'sq-meter', name: 'Square Meter', symbol: 'm²', toBase: 1 },
            { id: 'sq-kilometer', name: 'Square Kilometer', symbol: 'km²', toBase: 1e6 },
            { id: 'sq-centimeter', name: 'Square Centimeter', symbol: 'cm²', toBase: 1e-4 },
            { id: 'sq-millimeter', name: 'Square Millimeter', symbol: 'mm²', toBase: 1e-6 },
            { id: 'hectare', name: 'Hectare', symbol: 'ha', toBase: 10000 },
            { id: 'acre', name: 'Acre', symbol: 'ac', toBase: 4046.8564224 },
            { id: 'sq-mile', name: 'Square Mile', symbol: 'mi²', toBase: 2589988.110336 },
            { id: 'sq-yard', name: 'Square Yard', symbol: 'yd²', toBase: 0.83612736 },
            { id: 'sq-foot', name: 'Square Foot', symbol: 'ft²', toBase: 0.09290304 },
            { id: 'sq-inch', name: 'Square Inch', symbol: 'in²', toBase: 0.00064516 },
        ],
        faqItems: [
            { q: 'How many square feet are in an acre?', a: 'One acre equals exactly 43,560 square feet.' },
            { q: 'How many acres are in a hectare?', a: 'One hectare equals approximately 2.47105 acres.' },
            { q: 'What is the difference between a hectare and a square kilometer?', a: 'One square kilometer equals 100 hectares.' },
        ],
        seoContent: 'Area conversion is critical in real estate, land surveying, agriculture, construction, and urban planning. Whether you are comparing property sizes listed in acres versus hectares, converting floor plans from square feet to square meters, or calculating crop field sizes, our area converter provides instant, accurate results. The square meter is the SI unit of area, while acres and hectares are commonly used for land measurement. In the US, square feet and acres dominate, while most other countries use square meters and hectares. Our tool supports all major area units and provides high-precision conversions essential for property transactions, architectural design, and scientific calculations.',
    },

    // ── 5. VOLUME ──────────────────────────────────────────────────────
    {
        id: 'volume',
        name: 'Volume',
        description: 'Convert between liters, gallons, cups, milliliters, and more.',
        icon: Box,
        color: 'blue',
        seoTitle: 'Volume Converter — Liters, Gallons, Cups, mL | Math Tools Hub',
        metaDescription: 'Free volume converter. Convert liters, gallons, cups, tablespoons, cubic meters, and more with real-time results.',
        units: [
            { id: 'liter', name: 'Liter', symbol: 'L', toBase: 1 },
            { id: 'milliliter', name: 'Milliliter', symbol: 'mL', toBase: 0.001 },
            { id: 'cubic-meter', name: 'Cubic Meter', symbol: 'm³', toBase: 1000 },
            { id: 'cubic-centimeter', name: 'Cubic Centimeter', symbol: 'cm³', toBase: 0.001 },
            { id: 'us-gallon', name: 'US Gallon', symbol: 'gal', toBase: 3.785411784 },
            { id: 'us-quart', name: 'US Quart', symbol: 'qt', toBase: 0.946352946 },
            { id: 'us-pint', name: 'US Pint', symbol: 'pt', toBase: 0.473176473 },
            { id: 'us-cup', name: 'US Cup', symbol: 'cup', toBase: 0.2365882365 },
            { id: 'us-tablespoon', name: 'US Tablespoon', symbol: 'tbsp', toBase: 0.01478676478 },
            { id: 'us-teaspoon', name: 'US Teaspoon', symbol: 'tsp', toBase: 0.00492892159 },
            { id: 'imperial-gallon', name: 'Imperial Gallon', symbol: 'imp gal', toBase: 4.54609 },
            { id: 'cubic-foot', name: 'Cubic Foot', symbol: 'ft³', toBase: 28.316846592 },
            { id: 'cubic-inch', name: 'Cubic Inch', symbol: 'in³', toBase: 0.016387064 },
        ],
        faqItems: [
            { q: 'How many liters are in a US gallon?', a: 'One US gallon equals approximately 3.78541 liters.' },
            { q: 'How many cups are in a liter?', a: 'One liter equals approximately 4.227 US cups.' },
            { q: 'What is the difference between a US gallon and an imperial gallon?', a: 'A US gallon is 3.785 liters, while an imperial gallon is 4.546 liters.' },
        ],
        seoContent: 'Volume conversion is essential in cooking, chemistry, engineering, and everyday life. From measuring ingredients in cups and tablespoons to calculating tank capacities in liters and gallons, accurate volume conversion saves time and prevents errors. Our converter supports metric units (liters, milliliters, cubic meters), US customary units (gallons, quarts, pints, cups, tablespoons, teaspoons), imperial units, and cubic measurements. The liter is the standard metric unit for liquid volume, while gallons and cups are common in the United States. Note that US and Imperial gallons differ significantly — our converter distinguishes between them for accuracy. Perfect for chefs adapting international recipes, scientists working with precise measurements, and engineers calculating fluid dynamics.',
    },

    // ── 6. TIME ────────────────────────────────────────────────────────
    {
        id: 'time',
        name: 'Time',
        description: 'Convert between seconds, minutes, hours, days, weeks, and more.',
        icon: Clock,
        color: 'purple',
        seoTitle: 'Time Converter — Seconds, Minutes, Hours, Days | Math Tools Hub',
        metaDescription: 'Free time unit converter. Convert seconds, minutes, hours, days, weeks, months, and years instantly.',
        units: [
            { id: 'second', name: 'Second', symbol: 's', toBase: 1 },
            { id: 'millisecond', name: 'Millisecond', symbol: 'ms', toBase: 0.001 },
            { id: 'microsecond', name: 'Microsecond', symbol: 'μs', toBase: 1e-6 },
            { id: 'nanosecond', name: 'Nanosecond', symbol: 'ns', toBase: 1e-9 },
            { id: 'minute', name: 'Minute', symbol: 'min', toBase: 60 },
            { id: 'hour', name: 'Hour', symbol: 'hr', toBase: 3600 },
            { id: 'day', name: 'Day', symbol: 'd', toBase: 86400 },
            { id: 'week', name: 'Week', symbol: 'wk', toBase: 604800 },
            { id: 'month', name: 'Month (30 days)', symbol: 'mo', toBase: 2592000 },
            { id: 'year', name: 'Year (365 days)', symbol: 'yr', toBase: 31536000 },
        ],
        faqItems: [
            { q: 'How many seconds are in a day?', a: 'There are exactly 86,400 seconds in a day (24 × 60 × 60).' },
            { q: 'How many hours are in a year?', a: 'A standard year has 8,760 hours (365 × 24).' },
            { q: 'How many milliseconds are in a second?', a: 'There are exactly 1,000 milliseconds in one second.' },
        ],
        seoContent: 'Time conversion is fundamental in project management, programming, science, and daily life. Whether you need to convert hours to minutes for scheduling, milliseconds to seconds for performance benchmarking, or days to weeks for project planning, our time converter delivers instant results. We support units from nanoseconds (used in computing and physics) all the way to years. Months are calculated as 30 days and years as 365 days for consistency. Programmers frequently convert between milliseconds, seconds, and minutes. Project managers work with days, weeks, and months. Scientists may need nanosecond or microsecond precision. Our tool covers all these use cases with clean, accurate conversions.',
    },

    // ── 7. SPEED ───────────────────────────────────────────────────────
    {
        id: 'speed',
        name: 'Speed',
        description: 'Convert between km/h, mph, m/s, knots, and more.',
        icon: Gauge,
        color: 'mint',
        seoTitle: 'Speed Converter — km/h, mph, m/s, Knots | Math Tools Hub',
        metaDescription: 'Free speed converter. Convert km/h, mph, meters per second, knots, and mach instantly.',
        units: [
            { id: 'mps', name: 'Meter per Second', symbol: 'm/s', toBase: 1 },
            { id: 'kmph', name: 'Kilometer per Hour', symbol: 'km/h', toBase: 0.277778 },
            { id: 'mph', name: 'Mile per Hour', symbol: 'mph', toBase: 0.44704 },
            { id: 'knot', name: 'Knot', symbol: 'kn', toBase: 0.514444 },
            { id: 'fps', name: 'Foot per Second', symbol: 'ft/s', toBase: 0.3048 },
            { id: 'mach', name: 'Mach (at sea level)', symbol: 'Mach', toBase: 343 },
            { id: 'speed-of-light', name: 'Speed of Light', symbol: 'c', toBase: 299792458 },
        ],
        faqItems: [
            { q: 'How do I convert km/h to mph?', a: 'Multiply km/h by 0.621371 to get mph. For example, 100 km/h ≈ 62.14 mph.' },
            { q: 'What is a knot?', a: 'A knot is one nautical mile per hour, approximately 1.852 km/h or 1.151 mph.' },
            { q: 'What is Mach 1?', a: 'Mach 1 is the speed of sound, approximately 343 m/s or 1,235 km/h at sea level.' },
        ],
        seoContent: 'Speed conversion is important in transportation, aviation, physics, and sports. Whether you need to convert km/h to mph for international travel, calculate vessel speed in knots for maritime navigation, or understand Mach numbers in aerospace engineering, our speed converter provides instant, accurate results. The meter per second (m/s) is the SI unit of speed, but km/h and mph are more commonly used in daily life. Pilots and sailors use knots, while aerospace engineers work with Mach numbers. We even include the speed of light for physics calculations. Our converter handles all these units seamlessly, making it perfect for students, travelers, pilots, and engineers.',
    },

    // ── 8. PRESSURE ────────────────────────────────────────────────────
    {
        id: 'pressure',
        name: 'Pressure',
        description: 'Convert between Pascal, bar, PSI, atmosphere, and more.',
        icon: Wind,
        color: 'teal',
        seoTitle: 'Pressure Converter — Pascal, Bar, PSI, ATM | Math Tools Hub',
        metaDescription: 'Free pressure converter. Convert Pascal, bar, PSI, atmospheres, torr, and mmHg with instant results.',
        units: [
            { id: 'pascal', name: 'Pascal', symbol: 'Pa', toBase: 1 },
            { id: 'kilopascal', name: 'Kilopascal', symbol: 'kPa', toBase: 1000 },
            { id: 'megapascal', name: 'Megapascal', symbol: 'MPa', toBase: 1e6 },
            { id: 'bar', name: 'Bar', symbol: 'bar', toBase: 100000 },
            { id: 'millibar', name: 'Millibar', symbol: 'mbar', toBase: 100 },
            { id: 'psi', name: 'PSI', symbol: 'psi', toBase: 6894.757293168 },
            { id: 'atmosphere', name: 'Atmosphere', symbol: 'atm', toBase: 101325 },
            { id: 'torr', name: 'Torr', symbol: 'Torr', toBase: 133.322368421 },
            { id: 'mmhg', name: 'mmHg', symbol: 'mmHg', toBase: 133.322387415 },
        ],
        faqItems: [
            { q: 'How many PSI is 1 bar?', a: 'One bar equals approximately 14.5038 PSI.' },
            { q: 'What is standard atmospheric pressure?', a: 'Standard atmospheric pressure is 101,325 Pa, 1 atm, or 14.696 PSI.' },
            { q: 'What is the difference between torr and mmHg?', a: 'They are nearly identical. 1 torr ≈ 1 mmHg, but they differ slightly in precise definition.' },
        ],
        seoContent: 'Pressure conversion is vital in engineering, meteorology, medicine, and automotive industries. Tire pressure is measured in PSI, weather forecasting uses millibars or hectopascals, blood pressure is reported in mmHg, and industrial applications use Pascal, bar, and atmospheres. The Pascal (Pa) is the SI unit of pressure, but engineers and mechanics more commonly use bar and PSI. Our converter supports Pascal, kilopascal, megapascal, bar, millibar, PSI, atmosphere, torr, and mmHg. Whether you are inflating tires, calibrating instruments, studying thermodynamics, or interpreting weather data, this tool provides the accurate conversions you need.',
    },

    // ── 9. ENERGY ──────────────────────────────────────────────────────
    {
        id: 'energy',
        name: 'Energy',
        description: 'Convert between joules, calories, kWh, BTU, and more.',
        icon: Zap,
        color: 'yellow',
        seoTitle: 'Energy Converter — Joules, Calories, kWh, BTU | Math Tools Hub',
        metaDescription: 'Free energy converter. Convert joules, calories, kilowatt-hours, BTU, and electron volts instantly.',
        units: [
            { id: 'joule', name: 'Joule', symbol: 'J', toBase: 1 },
            { id: 'kilojoule', name: 'Kilojoule', symbol: 'kJ', toBase: 1000 },
            { id: 'calorie', name: 'Calorie (small)', symbol: 'cal', toBase: 4.184 },
            { id: 'kilocalorie', name: 'Kilocalorie (food)', symbol: 'kcal', toBase: 4184 },
            { id: 'watt-hour', name: 'Watt Hour', symbol: 'Wh', toBase: 3600 },
            { id: 'kilowatt-hour', name: 'Kilowatt Hour', symbol: 'kWh', toBase: 3600000 },
            { id: 'btu', name: 'BTU', symbol: 'BTU', toBase: 1055.05585262 },
            { id: 'electronvolt', name: 'Electron Volt', symbol: 'eV', toBase: 1.602176634e-19 },
            { id: 'foot-pound', name: 'Foot-Pound', symbol: 'ft·lbf', toBase: 1.3558179483 },
        ],
        faqItems: [
            { q: 'How many calories are in a kilocalorie?', a: 'One kilocalorie (food calorie) equals exactly 1,000 small calories.' },
            { q: 'How do I convert kWh to joules?', a: 'Multiply kWh by 3,600,000 to get joules. 1 kWh = 3.6 million joules.' },
            { q: 'What is a BTU?', a: 'A BTU (British Thermal Unit) is approximately 1,055 joules, used to measure heating and cooling capacity.' },
        ],
        seoContent: 'Energy conversion is critical in physics, nutrition, electrical engineering, and HVAC. The joule is the SI unit of energy, but different industries use different units: kilocalories for food energy, kilowatt-hours for electricity billing, BTU for heating and cooling, and electron volts in particle physics. Understanding these conversions helps you compare energy sources, calculate electricity costs, track dietary intake, and size HVAC equipment. Our converter handles all major energy units with precision, from the microscopic electron volt to the practical kilowatt-hour. Students, engineers, nutritionists, and homeowners all benefit from quick, accurate energy conversions.',
    },

    // ── 10. POWER ─────────────────────────────────────────────────────
    {
        id: 'power',
        name: 'Power',
        description: 'Convert between watts, horsepower, BTU/h, and more.',
        icon: Power,
        color: 'red',
        seoTitle: 'Power Converter — Watts, Horsepower, BTU/h | Math Tools Hub',
        metaDescription: 'Free power converter. Convert watts, kilowatts, horsepower, BTU/h, and more with instant precision.',
        units: [
            { id: 'watt', name: 'Watt', symbol: 'W', toBase: 1 },
            { id: 'kilowatt', name: 'Kilowatt', symbol: 'kW', toBase: 1000 },
            { id: 'megawatt', name: 'Megawatt', symbol: 'MW', toBase: 1e6 },
            { id: 'horsepower', name: 'Horsepower (mechanical)', symbol: 'hp', toBase: 745.69987158 },
            { id: 'metric-horsepower', name: 'Metric Horsepower', symbol: 'PS', toBase: 735.49875 },
            { id: 'btu-per-hour', name: 'BTU per Hour', symbol: 'BTU/h', toBase: 0.29307107 },
            { id: 'foot-pound-per-second', name: 'Foot-Pound per Second', symbol: 'ft·lbf/s', toBase: 1.3558179483 },
        ],
        faqItems: [
            { q: 'How many watts are in a horsepower?', a: 'One mechanical horsepower equals approximately 745.7 watts.' },
            { q: 'What is the difference between mechanical and metric horsepower?', a: 'Mechanical horsepower (hp) = 745.7 W, while metric horsepower (PS) = 735.5 W.' },
            { q: 'How do I convert kilowatts to horsepower?', a: 'Multiply kilowatts by 1.341 to get mechanical horsepower.' },
        ],
        seoContent: 'Power measures the rate of energy transfer or conversion. The watt is the SI unit, but horsepower remains popular in automotive and mechanical engineering, and BTU/h is standard in HVAC. Whether you are comparing car engine outputs, sizing electrical equipment, or calculating heating capacity, our power converter provides instant, accurate results. We support watts, kilowatts, megawatts, mechanical and metric horsepower, BTU per hour, and foot-pounds per second. Understanding power units helps you make informed decisions about vehicles, appliances, generators, and industrial equipment.',
    },

    // ── 11. DATA STORAGE ──────────────────────────────────────────────
    {
        id: 'data-storage',
        name: 'Data Storage',
        description: 'Convert between bytes, KB, MB, GB, TB, and more.',
        icon: HardDrive,
        color: 'indigo',
        seoTitle: 'Data Storage Converter — KB, MB, GB, TB, PB | Math Tools Hub',
        metaDescription: 'Free data storage converter. Convert bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes with binary and decimal support.',
        units: [
            { id: 'bit', name: 'Bit', symbol: 'b', toBase: 0.125 },
            { id: 'byte', name: 'Byte', symbol: 'B', toBase: 1 },
            { id: 'kilobyte', name: 'Kilobyte (KB)', symbol: 'KB', toBase: 1000 },
            { id: 'megabyte', name: 'Megabyte (MB)', symbol: 'MB', toBase: 1e6 },
            { id: 'gigabyte', name: 'Gigabyte (GB)', symbol: 'GB', toBase: 1e9 },
            { id: 'terabyte', name: 'Terabyte (TB)', symbol: 'TB', toBase: 1e12 },
            { id: 'petabyte', name: 'Petabyte (PB)', symbol: 'PB', toBase: 1e15 },
            { id: 'kibibyte', name: 'Kibibyte (KiB)', symbol: 'KiB', toBase: 1024 },
            { id: 'mebibyte', name: 'Mebibyte (MiB)', symbol: 'MiB', toBase: 1048576 },
            { id: 'gibibyte', name: 'Gibibyte (GiB)', symbol: 'GiB', toBase: 1073741824 },
            { id: 'tebibyte', name: 'Tebibyte (TiB)', symbol: 'TiB', toBase: 1099511627776 },
        ],
        faqItems: [
            { q: 'What is the difference between KB and KiB?', a: '1 KB = 1,000 bytes (decimal). 1 KiB = 1,024 bytes (binary). Operating systems often use binary, while storage manufacturers use decimal.' },
            { q: 'How many GB are in a TB?', a: '1 TB = 1,000 GB (decimal) or approximately 931 GiB (binary).' },
            { q: 'How many bits are in a byte?', a: 'There are exactly 8 bits in one byte.' },
        ],
        seoContent: 'Data storage conversion is essential in computing, IT, and digital media. Hard drives, SSDs, USB drives, and cloud storage are measured in GB and TB, while file sizes are often shown in KB and MB. The distinction between decimal (KB, MB, GB) and binary (KiB, MiB, GiB) units is important — storage manufacturers use decimal units, while operating systems often use binary. Our converter supports both systems, plus bits and bytes. Whether you are comparing cloud storage plans, calculating backup requirements, or understanding why your 1 TB drive shows only 931 GB, this tool provides the clarity you need.',
    },

    // ── 12. ANGLE ─────────────────────────────────────────────────────
    {
        id: 'angle',
        name: 'Angle',
        description: 'Convert between degrees, radians, gradians, and more.',
        icon: Compass,
        color: 'violet',
        seoTitle: 'Angle Converter — Degrees, Radians, Gradians | Math Tools Hub',
        metaDescription: 'Free angle converter. Convert degrees, radians, gradians, arcminutes, and arcseconds instantly.',
        units: [
            { id: 'degree', name: 'Degree', symbol: '°', toBase: 1 },
            { id: 'radian', name: 'Radian', symbol: 'rad', toBase: 180 / Math.PI },
            { id: 'gradian', name: 'Gradian', symbol: 'gon', toBase: 0.9 },
            { id: 'arcminute', name: 'Arcminute', symbol: '′', toBase: 1 / 60 },
            { id: 'arcsecond', name: 'Arcsecond', symbol: '″', toBase: 1 / 3600 },
            { id: 'turn', name: 'Turn (Revolution)', symbol: 'rev', toBase: 360 },
            { id: 'milliradian', name: 'Milliradian', symbol: 'mrad', toBase: 180 / (Math.PI * 1000) },
        ],
        faqItems: [
            { q: 'How many radians are in 180 degrees?', a: '180 degrees equals π (approximately 3.14159) radians.' },
            { q: 'What is a gradian?', a: 'A gradian divides a right angle into 100 parts. A full circle is 400 gradians.' },
            { q: 'How many arcminutes are in one degree?', a: 'There are exactly 60 arcminutes in one degree.' },
        ],
        seoContent: 'Angle conversion is fundamental in mathematics, navigation, surveying, astronomy, and engineering. Degrees are the most common unit in everyday use, while radians are standard in mathematics and physics. Gradians are used in some surveying applications, and arcminutes and arcseconds provide the fine precision needed in astronomy and navigation. Our converter supports degrees, radians, gradians, arcminutes, arcseconds, turns (revolutions), and milliradians. Whether you are solving trigonometry problems, programming rotations in software, or working with geographic coordinates, this tool provides instant, accurate angle conversions.',
    },

    // ── 13. FREQUENCY ─────────────────────────────────────────────────
    {
        id: 'frequency',
        name: 'Frequency',
        description: 'Convert between hertz, kilohertz, megahertz, gigahertz, and more.',
        icon: Radio,
        color: 'pink',
        seoTitle: 'Frequency Converter — Hz, kHz, MHz, GHz | Math Tools Hub',
        metaDescription: 'Free frequency converter. Convert hertz, kilohertz, megahertz, gigahertz, and RPM instantly.',
        units: [
            { id: 'hertz', name: 'Hertz', symbol: 'Hz', toBase: 1 },
            { id: 'kilohertz', name: 'Kilohertz', symbol: 'kHz', toBase: 1000 },
            { id: 'megahertz', name: 'Megahertz', symbol: 'MHz', toBase: 1e6 },
            { id: 'gigahertz', name: 'Gigahertz', symbol: 'GHz', toBase: 1e9 },
            { id: 'terahertz', name: 'Terahertz', symbol: 'THz', toBase: 1e12 },
            { id: 'rpm', name: 'RPM', symbol: 'rpm', toBase: 1 / 60 },
            { id: 'rad-per-sec', name: 'Radian per Second', symbol: 'rad/s', toBase: 1 / (2 * Math.PI) },
        ],
        faqItems: [
            { q: 'How many kHz are in 1 MHz?', a: 'One megahertz equals exactly 1,000 kilohertz.' },
            { q: 'What is CPU frequency measured in?', a: 'Modern CPU clock speeds are measured in GHz (gigahertz), typically between 2-5 GHz.' },
            { q: 'How do I convert RPM to hertz?', a: 'Divide RPM by 60 to get hertz. For example, 3000 RPM = 50 Hz.' },
        ],
        seoContent: 'Frequency conversion is important in electronics, telecommunications, music, and mechanical engineering. Radio stations broadcast at MHz frequencies, CPUs run at GHz speeds, musical notes are defined in Hz, and rotating machinery is measured in RPM. The hertz (Hz) is the SI unit of frequency, representing one cycle per second. Our converter handles hertz, kilohertz, megahertz, gigahertz, terahertz, RPM, and radians per second. Whether you are tuning a radio, analyzing signal frequencies, calculating motor speeds, or studying wave physics, this tool provides the accurate frequency conversions you need.',
    },

    // ── 14. FUEL ECONOMY ──────────────────────────────────────────────
    {
        id: 'fuel-economy',
        name: 'Fuel Economy',
        description: 'Convert between MPG, km/L, L/100km, and more.',
        icon: Fuel,
        color: 'amber',
        seoTitle: 'Fuel Economy Converter — MPG, km/L, L/100km | Math Tools Hub',
        metaDescription: 'Free fuel economy converter. Convert MPG, km/L, L/100km and compare vehicle efficiency across measurement systems.',
        isCustomConversion: true,
        units: [
            { id: 'km-per-liter', name: 'Kilometer per Liter', symbol: 'km/L', toBase: (v) => v, fromBase: (v) => v },
            { id: 'mpg-us', name: 'Miles per Gallon (US)', symbol: 'mpg', toBase: (v) => v * 0.425144, fromBase: (v) => v / 0.425144 },
            { id: 'mpg-imperial', name: 'Miles per Gallon (Imperial)', symbol: 'mpg (imp)', toBase: (v) => v * 0.354006, fromBase: (v) => v / 0.354006 },
            { id: 'l-per-100km', name: 'Liters per 100 km', symbol: 'L/100km', toBase: (v) => v === 0 ? 0 : 100 / v, fromBase: (v) => v === 0 ? 0 : 100 / v },
        ],
        faqItems: [
            { q: 'How do I convert MPG to L/100km?', a: 'Divide 235.215 by the MPG value. For example, 30 MPG ≈ 7.84 L/100km.' },
            { q: 'What is a good fuel economy?', a: 'A good fuel economy is generally considered to be above 30 MPG (US) or below 8 L/100km.' },
            { q: 'Why do US and Imperial MPG differ?', a: 'Because US gallons (3.785 L) are smaller than Imperial gallons (4.546 L), so Imperial MPG values are higher for the same vehicle.' },
        ],
        seoContent: 'Fuel economy conversion helps you compare vehicle efficiency across different measurement systems used worldwide. The United States uses miles per gallon (MPG), Europe uses liters per 100 kilometers (L/100km), and some countries use kilometers per liter (km/L). Note that L/100km is an inverse measurement — lower values mean better efficiency. Our converter handles all these units, including the distinction between US MPG and Imperial MPG (which differ because US and Imperial gallons have different sizes). Compare vehicles, estimate fuel costs, and make informed purchasing decisions with accurate fuel economy conversions.',
    },

    // ── 15. DATA TRANSFER RATE ────────────────────────────────────────
    {
        id: 'data-transfer',
        name: 'Data Transfer Rate',
        description: 'Convert between bps, Kbps, Mbps, Gbps, and more.',
        icon: Wifi,
        color: 'olive',
        seoTitle: 'Data Transfer Rate Converter — Mbps, Gbps, MB/s | Math Tools Hub',
        metaDescription: 'Free data transfer rate converter. Convert bits per second, Mbps, Gbps, MB/s, and more for network speed comparisons.',
        units: [
            { id: 'bps', name: 'Bit per Second', symbol: 'bps', toBase: 1 },
            { id: 'kbps', name: 'Kilobit per Second', symbol: 'Kbps', toBase: 1000 },
            { id: 'mbps', name: 'Megabit per Second', symbol: 'Mbps', toBase: 1e6 },
            { id: 'gbps', name: 'Gigabit per Second', symbol: 'Gbps', toBase: 1e9 },
            { id: 'tbps', name: 'Terabit per Second', symbol: 'Tbps', toBase: 1e12 },
            { id: 'bytes-per-sec', name: 'Byte per Second', symbol: 'B/s', toBase: 8 },
            { id: 'kb-per-sec', name: 'Kilobyte per Second', symbol: 'KB/s', toBase: 8000 },
            { id: 'mb-per-sec', name: 'Megabyte per Second', symbol: 'MB/s', toBase: 8e6 },
            { id: 'gb-per-sec', name: 'Gigabyte per Second', symbol: 'GB/s', toBase: 8e9 },
        ],
        faqItems: [
            { q: 'What is the difference between Mbps and MB/s?', a: 'Mbps = megabits per second, MB/s = megabytes per second. 1 MB/s = 8 Mbps.' },
            { q: 'How fast is 100 Mbps in MB/s?', a: '100 Mbps = 12.5 MB/s. Divide Mbps by 8 to get MB/s.' },
            { q: 'What is a good internet speed?', a: 'For most households, 100-300 Mbps is considered fast. For 4K streaming and gaming, 200+ Mbps is recommended.' },
        ],
        seoContent: 'Data transfer rate conversion helps you understand and compare internet speeds, network performance, and file transfer times. ISPs advertise speeds in Mbps (megabits per second), but downloads are typically shown in MB/s (megabytes per second) — and since 1 byte = 8 bits, the numbers differ by a factor of 8. Our converter supports bits per second, kilobits, megabits, gigabits, terabits, and their byte-based equivalents. Whether you are comparing internet plans, benchmarking network performance, estimating file download times, or configuring network equipment, this tool provides instant, accurate data rate conversions.',
    },

    // ── 16. FORCE ─────────────────────────────────────────────────────
    {
        id: 'force',
        name: 'Force',
        description: 'Convert between newtons, pound-force, dynes, and more.',
        icon: Magnet,
        color: 'coral',
        seoTitle: 'Force Converter — Newtons, Pound-Force, Dynes | Math Tools Hub',
        metaDescription: 'Free force converter. Convert newtons, kilonewtons, pound-force, dynes, and kilogram-force instantly.',
        units: [
            { id: 'newton', name: 'Newton', symbol: 'N', toBase: 1 },
            { id: 'kilonewton', name: 'Kilonewton', symbol: 'kN', toBase: 1000 },
            { id: 'meganewton', name: 'Meganewton', symbol: 'MN', toBase: 1e6 },
            { id: 'dyne', name: 'Dyne', symbol: 'dyn', toBase: 1e-5 },
            { id: 'pound-force', name: 'Pound-force', symbol: 'lbf', toBase: 4.4482216152605 },
            { id: 'kilogram-force', name: 'Kilogram-force', symbol: 'kgf', toBase: 9.80665 },
            { id: 'kip', name: 'Kip', symbol: 'kip', toBase: 4448.2216152605 },
        ],
        faqItems: [
            { q: 'How many newtons are in a pound-force?', a: 'One pound-force equals approximately 4.44822 newtons.' },
            { q: 'What is a kilogram-force?', a: 'One kilogram-force (kgf) is the force exerted by 1 kg under standard gravity (9.80665 m/s²), equal to 9.80665 N.' },
            { q: 'What is a kip?', a: 'A kip equals 1,000 pounds-force (4,448.22 N), commonly used in structural engineering.' },
        ],
        seoContent: 'Force conversion is essential in physics, engineering, and construction. The newton (N) is the SI unit of force, but many engineers use pound-force (lbf) in the imperial system, and kilogram-force (kgf) is still common in some applications. Structural engineers use kips (1,000 lbf) for large-scale calculations. Our converter supports newtons, kilonewtons, meganewtons, dynes, pound-force, kilogram-force, and kips. Whether you are solving physics problems, designing structures, or calibrating instruments, this tool delivers the precision you need for accurate force conversions.',
    },

    // ── 17. DENSITY ───────────────────────────────────────────────────
    {
        id: 'density',
        name: 'Density',
        description: 'Convert between kg/m³, g/cm³, lb/ft³, and more.',
        icon: Droplets,
        color: 'blue',
        seoTitle: 'Density Converter — kg/m³, g/cm³, lb/ft³ | Math Tools Hub',
        metaDescription: 'Free density converter. Convert kg/m³, g/cm³, lb/ft³, g/mL, and more with precision.',
        units: [
            { id: 'kg-per-m3', name: 'Kilogram per Cubic Meter', symbol: 'kg/m³', toBase: 1 },
            { id: 'g-per-cm3', name: 'Gram per Cubic Centimeter', symbol: 'g/cm³', toBase: 1000 },
            { id: 'g-per-ml', name: 'Gram per Milliliter', symbol: 'g/mL', toBase: 1000 },
            { id: 'kg-per-liter', name: 'Kilogram per Liter', symbol: 'kg/L', toBase: 1000 },
            { id: 'lb-per-ft3', name: 'Pound per Cubic Foot', symbol: 'lb/ft³', toBase: 16.018463374 },
            { id: 'lb-per-in3', name: 'Pound per Cubic Inch', symbol: 'lb/in³', toBase: 27679.904710191 },
            { id: 'lb-per-gallon', name: 'Pound per US Gallon', symbol: 'lb/gal', toBase: 119.826427317 },
        ],
        faqItems: [
            { q: 'What is the density of water?', a: 'Pure water has a density of 1,000 kg/m³ (1 g/cm³ or 1 kg/L) at 4°C.' },
            { q: 'How do I convert g/cm³ to kg/m³?', a: 'Multiply g/cm³ by 1,000 to get kg/m³. For example, 2.7 g/cm³ = 2,700 kg/m³.' },
            { q: 'What is specific gravity?', a: 'Specific gravity is the ratio of a substance\'s density to water\'s density (1 g/cm³). It is dimensionless.' },
        ],
        seoContent: 'Density conversion is important in chemistry, material science, geology, and engineering. Density measures mass per unit volume and helps identify materials, calculate buoyancy, and design structures. The SI unit is kg/m³, but g/cm³ is more practical for laboratory work since water\'s density is conveniently 1 g/cm³. Our converter supports kg/m³, g/cm³, g/mL, kg/L, lb/ft³, lb/in³, and lb/gal. Whether you are classifying minerals, formulating chemical solutions, or calculating material requirements for construction, this tool provides the accurate density conversions you need.',
    },

    // ── 18. ELECTRIC ──────────────────────────────────────────────────
    {
        id: 'electric',
        name: 'Electric Units',
        description: 'Convert between volts, amperes, watts, ohms, and more.',
        icon: CircuitBoard,
        color: 'mint',
        seoTitle: 'Electrical Unit Converter — Volts, Amps, Watts, Ohms | Math Tools Hub',
        metaDescription: 'Free electrical unit converter. Convert volts, amperes, watts, ohms, farads, and coulombs. Includes Ohm\'s law and power calculations.',
        isCustomConversion: true,
        units: [
            // Voltage
            { id: 'volt', name: 'Volt', symbol: 'V', toBase: (v) => v, fromBase: (v) => v, group: 'Voltage' },
            { id: 'millivolt', name: 'Millivolt', symbol: 'mV', toBase: (v) => v * 0.001, fromBase: (v) => v * 1000, group: 'Voltage' },
            { id: 'kilovolt', name: 'Kilovolt', symbol: 'kV', toBase: (v) => v * 1000, fromBase: (v) => v / 1000, group: 'Voltage' },
            // Current
            { id: 'ampere', name: 'Ampere', symbol: 'A', toBase: (v) => v, fromBase: (v) => v, group: 'Current' },
            { id: 'milliampere', name: 'Milliampere', symbol: 'mA', toBase: (v) => v * 0.001, fromBase: (v) => v * 1000, group: 'Current' },
            { id: 'microampere', name: 'Microampere', symbol: 'μA', toBase: (v) => v * 1e-6, fromBase: (v) => v * 1e6, group: 'Current' },
            // Resistance
            { id: 'ohm', name: 'Ohm', symbol: 'Ω', toBase: (v) => v, fromBase: (v) => v, group: 'Resistance' },
            { id: 'kilohm', name: 'Kilohm', symbol: 'kΩ', toBase: (v) => v * 1000, fromBase: (v) => v / 1000, group: 'Resistance' },
            { id: 'megohm', name: 'Megohm', symbol: 'MΩ', toBase: (v) => v * 1e6, fromBase: (v) => v / 1e6, group: 'Resistance' },
            // Capacitance
            { id: 'farad', name: 'Farad', symbol: 'F', toBase: (v) => v, fromBase: (v) => v, group: 'Capacitance' },
            { id: 'microfarad', name: 'Microfarad', symbol: 'μF', toBase: (v) => v * 1e-6, fromBase: (v) => v * 1e6, group: 'Capacitance' },
            { id: 'nanofarad', name: 'Nanofarad', symbol: 'nF', toBase: (v) => v * 1e-9, fromBase: (v) => v * 1e9, group: 'Capacitance' },
            { id: 'picofarad', name: 'Picofarad', symbol: 'pF', toBase: (v) => v * 1e-12, fromBase: (v) => v * 1e12, group: 'Capacitance' },
        ],
        faqItems: [
            { q: 'What is Ohm\'s law?', a: 'Ohm\'s law states V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).' },
            { q: 'How many millivolts are in a volt?', a: 'There are exactly 1,000 millivolts in one volt.' },
            { q: 'What is a farad?', a: 'A farad (F) is the SI unit of capacitance. One farad stores one coulomb of charge at one volt. Practical capacitors are usually measured in μF, nF, or pF.' },
        ],
        seoContent: 'Electrical unit conversion is essential for electronics engineers, electricians, hobbyists, and students. Our converter handles conversions within the same physical quantity: voltage (volts, millivolts, kilovolts), current (amperes, milliamperes, microamperes), resistance (ohms, kilohms, megohms), and capacitance (farads, microfarads, nanofarads, picofarads). Understanding these units and their relationships through Ohm\'s law (V = IR) and power equations (P = IV) is fundamental to circuit design and electrical safety. Whether you are designing PCBs, troubleshooting circuits, or studying for an exam, this tool provides quick, accurate electrical unit conversions.',
    },
]

// ─── Lookup Helpers ──────────────────────────────────────────────────────

export const getConverterById = (id) =>
    converterCategories.find(c => c.id === id)

export const getAllConverterIds = () =>
    converterCategories.map(c => c.id)
