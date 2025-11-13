from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    """
        A custom user model extending Django's AbstractUser.
        This allows us to add extra fields while keeping built-in
        authentication features.
    """

    # Add extra fields
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)

    #Roles 
    ROLE_CHOICES = [
        ('user', 'User'),
        ('moderator', 'Moderator'),
        ('admin', 'Admin')
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')

    # Track user activity
    date_joined = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)


def __str__(self):
    return f"{self.username} ({self.email})"

class Meta:
    verbose_name = "User"
    verbose_name_plural = "Users"    


    

