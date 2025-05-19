
## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rajan8687/WeatherApps.git
    cd WeatherApps
    ```
    (Alternatively, you can download the ZIP file and extract it.)

2.  **Get an API Key:**
    *   Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/appid).
    *   Open the `script.js` file.
    *   Find the following line:
        ```javascript
        const apikey = "1765c1fb7a84db010b2a51d38cf6787e"; // Replace with your API key
        ```
    *   Replace the placeholder API key (or the existing example key) with **your own** OpenWeatherMap API key.

## How to Run

1.  Ensure you have completed the **Setup and Installation** steps, especially adding your API key to `script.js`.
2.  Open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).
3.  You will be presented with a login screen.

## Login Credentials

Use the following hardcoded credentials to log in (defined in `script.js`):
*   **Username:** `user`
*   **Password:** `pass123`

## Usage

1.  After successful login, the weather card interface will appear.
2.  Enter the name of a city in the search bar (e.g., "London", "Tokyo", "New York").
3.  Click the search button (magnifying glass icon) or press Enter.
4.  The weather details for the entered city will be displayed, including:
    *   Current temperature
    *   City name
    *   Humidity percentage
    *   Wind speed
    *   A weather icon representing the current conditions.
5.  Click the "View Air Quality Index →" link to open a Google search for the Air Quality Index of the displayed city in a new tab.

## Included Assets (Icons)

The project includes the following image assets used for weather conditions and UI elements:

*   `clear.png`: Icon for clear weather.
*   `clouds.png`: Icon for cloudy weather.
*   `drizzle.png`: Icon for drizzle.
*   `humidity.png`: Icon for humidity display.
*   `mist.png`: Icon for misty weather.
*   `rain.png`: Icon for rainy weather.
*   `search.png`: Icon for the search button.
*   `snow.png`: Icon for snowy weather.
*   `wind.png`: Icon for wind speed display.

---

**Note:**
*   The `snow.png` icon is present in the file structure, but the `script.js` provided does not currently have a condition to display it for "Snow" weather. This could be a potential future enhancement.
*   The application relies on a client-side API key. For a production application, it's recommended to handle API key management more securely (e.g., via a backend proxy).
