from PIL import Image

def remove_white_background(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # white is (255, 255, 255)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_background(r"C:\Users\asus\.gemini\antigravity-ide\brain\014b5abd-1c36-46f5-beda-365d2954bc33\media__1783452663852.png", r"d:\antigravity\stitch_steve_jon_solutions_website\public\logo.png")
