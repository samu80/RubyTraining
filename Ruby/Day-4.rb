=begin
Singletone Classes and methods :Ruby provides way to define methods that are specific to a particular 
object called Singleton Methods.
    When we declares a singleton method on an object, Ruby automatically creates a class
 to hold just the singleton methods called singletone class
 below is example :
=end


class Test
    def show
        puts "Singleton class"
    end

end


t=Test.new

def t.display
    puts "singletone class method"
end

t.display




=begin
Access Specifiers:
public: Everywhere accessible
protected: accessible only in class and by class's public methods outside class 
private: accessible in same class and by same class public method outside class  
=end
