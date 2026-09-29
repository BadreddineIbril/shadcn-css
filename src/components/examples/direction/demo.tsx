import { DirectionProvider } from "@/components/ui/direction";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" style={{ width: "100%", maxWidth: "320px" }}>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">الحساب</TabsTrigger>
            <TabsTrigger value="password">كلمة المرور</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>
          <TabsContent value="account" style={{ fontSize: "14px" }}>
            قم بإجراء تغييرات على حسابك هنا.
          </TabsContent>
          <TabsContent value="password" style={{ fontSize: "14px" }}>
            قم بتغيير كلمة المرور الخاصة بك هنا.
          </TabsContent>
          <TabsContent value="settings" style={{ fontSize: "14px" }}>
            إدارة إعداداتك هنا.
          </TabsContent>
        </Tabs>
      </div>
    </DirectionProvider>
  );
}
