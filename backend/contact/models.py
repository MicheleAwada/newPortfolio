from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=256)
    email = models.EmailField(max_length=256)
    title = models.CharField(max_length=200)
    body = models.TextField(blank=True)

    created_on = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        if self.title:
            return self.title
        return "No title"
    class Meta:
        ordering = ['-created_on']