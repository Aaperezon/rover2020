import urllib.request
while True:
    contents = urllib.request.urlopen("http://localhost/rover/services/Create.php/?temperature=20&humidity=30&flex_fr=30&flex_fl=30&flex_rr=30&flex_rl=30&gyro_x=30&gyro_y=30&gyro_z=30&light=40").read()