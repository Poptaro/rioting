from django.db import models

# Create your models here.

class User(models.Model):
  game_name = models.CharField(max_length=255)
  tag_line = models.CharField(max_length=255)
  puuid = models.CharField(max_length=255, null=True, blank=True)
  top_champs = models.JSONField(default=list, null=True, blank=True)

  def __str__(self):
    return(f"{self.game_name}#{self.tag_line} | PUUID:{True if self.puuid else False} | Top Champs Length: {len(self.top_champs)}")
