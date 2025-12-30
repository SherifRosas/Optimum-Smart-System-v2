"""
Shared input-sanitization helpers used across serializers.

Keep this module dependency-free (stdlib only) to avoid circular imports.
"""

from __future__ import annotations

import html
import re
from typing import Optional


_TAG_RE = re.compile(r"<[^>]*>")
_CTRL_RE = re.compile(r"[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]")


def sanitize_text(value: Optional[str]) -> str:
    """
    Sanitize free-form text input:
    - coerce None to empty string
    - strip control chars
    - drop HTML-like tags
    - trim whitespace

    Note: We *do not* HTML-escape here; we store plain text. Rendering layers should escape.
    """
    if value is None:
        return ""
    if not isinstance(value, str):
        value = str(value)
    value = _CTRL_RE.sub("", value)
    value = _TAG_RE.sub("", value)
    return value.strip()


def sanitize_phone(value: Optional[str]) -> str:
    """
    Sanitize a phone-like string by keeping digits and a leading '+'.
    """
    s = sanitize_text(value)
    if not s:
        return ""
    s = s.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")
    # keep only digits and plus
    s = re.sub(r"[^\d+]", "", s)
    # allow '+' only as first char
    if "+" in s:
        s = ("+" if s.startswith("+") else "") + re.sub(r"\+", "", s)
    # reasonable length guard
    return s[:20]


def sanitize_email(value: Optional[str]) -> str:
    """
    Basic email normalization. Validation should still happen in serializers/validators.
    """
    s = sanitize_text(value)
    s = s.replace(" ", "").lower()
    return s[:254]


def sanitize_url(value: Optional[str]) -> str:
    """
    Basic URL sanitation: strip tags/control chars + trim.
    """
    s = sanitize_text(value)
    # decode basic HTML entities users might paste
    s = html.unescape(s)
    return s[:2048]






