# Final Project

# Interactive Moving Art

I worked on how to get ellipse to interact with each other. I wanted
  to make a moving art application that would use ellipse and change colors. The ellipse was a go to for me because it can look almost smoky when there are a bunch of them on the page moving around.

I decided that I wanted the objects to check weather they are in the
  y axis and not the x axis so that objects can leave the screen, but I didn't want them to all disappear off into space. I also wanted them to check weather they hit each other and bounce around.

My next step was deciding that I would map the color of the objects
  by their starting position based on the mouse click that would create them. I ended up getting what ranged from red and pink to blue and purple. This was done through trial and error to get the colors that I wanted.

I found that adding the objects by clicking would take too long to
  get a good looking design so the add by mouseClicked was changed to mouseDragged this quickly took too much processing so I spliced the array when it reached 300 objects. When I changed to mouseDragged it also prevented objects from bouncing around. They would create themselves on top of each other causing them to shake. I decided this looked better even though it could have been achieved in an easier manner.

Next I decided that the background would be set on setup so that the
  changes to the canvas would be permanent. It gave the effect of a notebook that I have, but it was moving, constantly creating a new work of art.

I finally decided to add back in the mouseClicked function as a copy
  off the mouseDragged function to add a different way to paint the canvas and to add back in some of the functionality that I had created before.

If I had more time I wanted to change the shape of the objects from a
  circle to a triangle, but this would take quite a bit of time for me to figure out how to get the triangles to interact with each other and with the circle objects.

#Problems

I ran into quite a bit of problems when changing things where some of
  the methods wouldn't work. Usually these were just caused because of a misspelled word or not having the correct parentheses or curly brackets. I also occasionally ran into the problem of the sketch not working at all, I solved this by commenting out the code that I just wrote and fixed it. I had a problem with being able to see where the objects are currently on the canvas when clicking to add to create more movement. I end up getting the objects stuck together, If I had more time to work on it I could have changed the shading or something like that. It ended up looking good and I really enjoyed playing around with it!
