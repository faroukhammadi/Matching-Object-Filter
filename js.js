function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log("=== 🎯 الشروط اللي رانا نحوسو عليها ===");
  console.log("المفاتيح (Keys):", sourceKeys);
  console.log("الكائن المصدر (Source Object):", source);
  console.log("========================================\n");

  return collection.filter((obj, index) => {
    console.log(`\n🔍 فحص الكائن رقم [${index}]:`, JSON.stringify(obj));
    
    // الدالة every تفوت على قاع الشروط
    const matchesAll = sourceKeys.every(key => {
      const hasKey = obj.hasOwnProperty(key);
      const valueMatches = obj[key] === source[key];
      
      console.log(`   - المفتاح [${key}]: موجود؟ ${hasKey} | القيمة متطابقة؟ ${valueMatches}`);
      
      return hasKey && valueMatches;
    });

    if (matchesAll) {
      console.log(`    ✅ نتيجة الفحص: الكائن مقبول ويناسب الشروط!`);
    } else {
      console.log(`    ❌ نتيجة الفحص: الكائن مرفوض.`);
    }
    
    return matchesAll;
  });
}

// ---- تجربة الكود بمثال من التستات ----
const result = whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "bat": 2 }
);

console.log("\n🚀 النتيجة النهائية المرجعة للبرنامج:");
console.log(result);