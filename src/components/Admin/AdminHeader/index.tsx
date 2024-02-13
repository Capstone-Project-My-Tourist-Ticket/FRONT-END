function AdminHeader() {
  return (
    <div className="flex bg-[#1C2930] h-[65px] items-center justify-between p-8">
      <img className="w-[130px]" src="/images/admin/logo.png" alt="LOGO" />
      <img className="w-10" src="/images/admin/user.png" alt="Profile" />
    </div>
  );
}

export default AdminHeader;
