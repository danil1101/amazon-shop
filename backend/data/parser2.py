import json
from bs4 import BeautifulSoup

category = "drinks"

items = []
for i in range(1, 3):
    with open(f"./data/{category}/{i}.html", "r", encoding="utf-8") as infile:
        soup = BeautifulSoup(infile, "html.parser")
        # Find all divs with class="sg-col-inner"
        divs = soup.find_all("div", {"class": "sg-col-inner"})
        # Loop through each div
        for div in divs:
            # Find the img tag with class="s-image"
            img = div.find("img", {"class": "s-image"})
            if img:
                # Extract the src attribute
                link = img.get("src")

                # Try to find the title span
                title_span = div.find("span", {"class": "a-size-base-plus a-color-base a-text-normal"})
                if title_span:
                    title = title_span.text.strip()
                else:
                    title = ""

                # Try to find the rating span
                rating_span = div.find("span", {"class": "a-icon-alt"})
                if rating_span:
                    rating = rating_span.text.strip()
                else:
                    rating = None

                # Try to find the price span
                price_span = div.find("span", {"class": "a-price-whole"})
                if price_span:
                    price = price_span.text.strip()
                else:
                    price = None

                if rating is not None and price is not None:
                    item = {"link": link, 
                            "title": title, 
                            "rating": rating, 
                            "price": price, 
                            "category": category,
                            "available": True}
                    if item not in items:
                        items.append(item)

with open(f"./data/{category}/{category}.json", "w") as outfile:
    for item in items:
        json.dump(item, outfile)
        outfile.write("\n") # Add newline to separate objects