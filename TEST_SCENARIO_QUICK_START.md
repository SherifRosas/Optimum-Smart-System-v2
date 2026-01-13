# 🚀 Quick Start - Test Scenario

## Two Ways to Test

### Option 1: Automated Script (Recommended)
**Fastest way to set up test data**

```bash
cd Optimum-Smart-System-v2.4.0-TypeScript/optimum-backend
python comprehensive_test_scenario.py
```

**What it does:**
- ✅ Verifies clean database
- ✅ Creates 1 subadmin
- ✅ Creates 7 customers
- ✅ Creates 7 suppliers (with user accounts)
- ✅ Creates 7 orders
- ✅ Creates 7 product requests
- ✅ Creates 49 supplier offers (7×7)
- ✅ Runs AI evaluation
- ✅ Assigns orders to suppliers

**Time:** ~30 seconds

**Then continue manually:**
1. Login as Supplier 2 to confirm orders
2. Update order statuses
3. Have customers confirm receipt

---

### Option 2: Manual Step-by-Step
**Full control, understand each step**

Follow: `COMPREHENSIVE_TEST_SCENARIO.md`

**Time:** ~30-60 minutes

---

## After Running Automated Script

### Verify Results:
```bash
python verify_test_results.py
```

### Login Credentials Created:

**Subadmin:**
- Username: `SubAdmin1`
- Email: `subadmin1@optimum.com`
- Password: `SubAdmin123!@#`

**Suppliers (for login):**
- Supplier 1: `supplier1_tech` / `amr@techsolutions.eg` / `Supplier123!@#`
- Supplier 2: `supplier2_digital` / `nada@digitalworld.eg` / `Supplier123!@#`
- Supplier 3: `supplier3_electronics` / `karim@electronicshub.eg` / `Supplier123!@#`
- Supplier 4: `supplier4_smart` / `dina@smartdevices.eg` / `Supplier123!@#`
- Supplier 5: `supplier5_future` / `tamer@futuretech.eg` / `Supplier123!@#`
- Supplier 6: `supplier6_innovation` / `rania@innovationsys.eg` / `Supplier123!@#`
- Supplier 7: `supplier7_premium` / `hassan@premiumelec.eg` / `Supplier123!@#`

---

## Next Steps (Manual)

1. **Login as Supplier 2** (`supplier2_digital`)
2. **Confirm all 7 orders** (AI selected Supplier 2 for all orders)
3. **Update order statuses** through delivery cycle
4. **Have customers confirm receipt** with notes

---

## Full Documentation

- **Automated Script:** `optimum-backend/comprehensive_test_scenario.py`
- **Manual Guide:** `COMPREHENSIVE_TEST_SCENARIO.md`
- **Verification:** `optimum-backend/verify_test_results.py`

---

**Ready? Run the automated script and let's test! 🎯**
