from django.core.management.base import BaseCommand
from accounting.utils import initialize_chart_of_accounts


class Command(BaseCommand):
    help = 'Initialize the chart of accounts with basic accounts'

    def handle(self, *args, **options):
        self.stdout.write('Initializing chart of accounts...')
        accounts = initialize_chart_of_accounts()
        self.stdout.write(
            self.style.SUCCESS(
                f'Successfully initialized chart of accounts:\n'
                f'  - Cash: {accounts["cash"].code} - {accounts["cash"].name}\n'
                f'  - AR: {accounts["ar"].code} - {accounts["ar"].name}\n'
                f'  - AP: {accounts["ap"].code} - {accounts["ap"].name}\n'
                f'  - Revenue: {accounts["revenue"].code} - {accounts["revenue"].name}\n'
                f'  - COGS: {accounts["cogs"].code} - {accounts["cogs"].name}\n'
            )
        )
