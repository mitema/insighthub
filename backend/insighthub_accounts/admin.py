from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User



#@admin.register(CustomerUser).
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'email' 'is_active', 'is_staff', 'date')
    fieldsets = UserAdmin.fieldsets +  (
        (None, {'fields': ('bio', 'profile_picture', 'role', 'date_of_birth')})
    )

    admin.site.register(User, CustomUserAdmin)
