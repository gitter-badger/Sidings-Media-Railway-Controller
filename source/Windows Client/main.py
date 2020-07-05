#Filename: main.py
#License: MIT
#Copyright 2020 Sidings Media

#Import Pygame
#Note: Pygame 2.0.0.dev10 is required as a minimum.
import pygame
from pygame.locals import *
import os.path
currentPath = os.path.dirname(__file__)
WHITE = (255,255,255)
class App:
    def __init__(self):
        self._running = True
        self._display_surf = None
        self.size = self.weight, self.height = 960, 540
    def on_init(self):
        pygame.init()
        self.fps = 60
        self.fpsClock = pygame.time.Clock()
        self._display_surf = pygame.display.set_mode(self.size,RESIZABLE)
        pygame.display.set_caption('Railway Controller')
        self.programIcon = pygame.image.load(os.path.join(currentPath,'images','Logos',"railwaycontrollerbg.png"))
        pygame.display.set_icon(self.programIcon)
        self._running = True
    def on_event(self, event):
        if event.type == pygame.QUIT:
            self._running = False
    def on_loop(self):
        pass
    def on_render(self):
        pass
    def on_cleanup(self):
        pygame.quit()
    def on_execute(self):
        if self.on_init() == False:
            self._running = False
        while( self._running ):
            self._display_surf.fill(WHITE)
            for event in pygame.event.get():
                self.on_event(event)
            self.on_loop()
            self.on_render()

            pygame.display.update()
            self.fpsClock.tick(self.fps)
        self.on_cleanup()


if __name__ == "__main__" :
    theApp = App()
    theApp.on_execute()