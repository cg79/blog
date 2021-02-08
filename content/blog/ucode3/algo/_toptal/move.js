function move() {
    if (c.x == lightX) {
        //move bottom    
        if (c.y > lightY) {
            //move top
            print("N");
        } else {
            //move bottom
            print("S");
        }
    } else {
        if (c.y == lightY) {
            //move bottom    
            if (c.x > lightX) {
                //move top
                print("W");
            } else {
                //move bottom
                print("E");
            }
        } else {
            if (c.x > lightX) {
                //move left
                if (c.y > lightY) {
                    print("NW");
                } else {
                    print("SW");
                }
            } else {
                //move righht
                if (c.y > lightY) {
                    print("NE");
                } else {
                    print("SE");
                }
            }
        }
    }
}
