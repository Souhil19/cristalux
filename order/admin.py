from django.contrib import admin

from .models import Order,OrderItem

#admin.site.register(Order)


#class OrderAdmin(admin.ModelAdmin):
    #list_display = [f.name for f in Order._meta.fields]

#class OrderItemAdmin(admin.ModelAdmin):
    #list_display = [f.name for f in OrderItem._meta.fields]


@admin.register(Order, OrderItem)
class UniversalAdmin(admin.ModelAdmin):
    def get_list_display(self, request):
        return [field.name for field in self.model._meta.concrete_fields]

#admin.site.register(Order, OrderAdmin)
#admin.site.register(OrderItem,OrderItemAdmin)
