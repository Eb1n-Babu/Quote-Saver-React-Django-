from django.db import models

# Create your models here.
class QuoteModel(models.Model):
    author = models.TextField()
    text = models.TextField()
