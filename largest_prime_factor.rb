# Ruby version of solution

number = 13195

def is_a_prime_number? (parameter)
	divisor = parameter
	i = parameter
	while i >= 2
		if parameter % i == 0
			divisor = i
		end
		i -= 1
	end

		if divisor == parameter
			return true
		else
			return false
		end
end

def largest_prime_factor (parameter)
	i = parameter
	while parameter >= 2
		if is_a_prime_number?(i) && (parameter % i == 0)
			return i
		end
		i -= 1
	end
end

puts "The largest prime factor of #{number} is #{largest_prime_factor(number)}"