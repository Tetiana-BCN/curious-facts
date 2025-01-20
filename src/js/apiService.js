export async function fetchMessageFromAPI() {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error getting API message:", error);
    return "Error getting message";
  }
}
