import urllib.request
import random
import time

   
def Send():
    gyro_x = str(random.randint(-45,45))
    gyro_y = str(random.randint(-10,10))
    gyro_z = str(random.randint(-20,20))
    temperature = str(random.randint(0,30))
    humidity = str(random.randint(20,80))

    contents = urllib.request.urlopen('http://localhost/rover/services/Create.php/?temperature='+temperature+'&humidity='+humidity+'&flex_fr=30&flex_fl=30&flex_rr=30&flex_rl=30&gyro_x='+gyro_x+'&gyro_y='+gyro_y+'&gyro_z='+gyro_z+'&light=40').read()

while True: 
    Send()
    time.sleep(1)
