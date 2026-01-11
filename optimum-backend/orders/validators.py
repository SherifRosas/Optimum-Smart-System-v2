"""
Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')




Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')




Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')







Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')




Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')




Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')


Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')

Custom validators for Order model
"""
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_positive_number(value):
    """Validate that a number is positive"""
    if value <= 0:
        raise ValidationError(f'{value} must be greater than 0')


def validate_future_date(value):
    """Validate that a date is not in the past"""
    if value < timezone.now().date():
        raise ValidationError('Date cannot be in the past')


def validate_product_type(value):
    """Validate product type format"""
    if not value or len(value.strip()) == 0:
        raise ValidationError('Product type cannot be empty')
    if len(value) > 200:
        raise ValidationError('Product type cannot exceed 200 characters')
    # Check for potentially dangerous characters
    dangerous_chars = ['<', '>', '&', '"', "'"]
    if any(char in value for char in dangerous_chars):
        raise ValidationError('Product type contains invalid characters')


def validate_phone_number(value):
    """Validate phone number format"""
    if not value:
        return
    # Remove common formatting characters
    cleaned = ''.join(filter(str.isdigit, value))
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValidationError('Phone number must be between 10 and 15 digits')


def validate_email(value):
    """Enhanced email validation"""
    if not value:
        return
    from django.core.validators import validate_email as django_validate_email
    try:
        django_validate_email(value)
    except ValidationError:
        raise ValidationError('Invalid email format')








